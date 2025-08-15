import React, { useState } from "react";
import {
  Wrapper,
  Input,
  Purchase,
  Title,
  BackIcon,
  Select,
  NoteTextArea,
  Error,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearCart } from "../../../../../redux/cart/cartActions";
import BranchSelect from "./branchSelect";
import RegionSelect from "./regionSelect";
import { useAddOrderQuery } from "../../../../../apis/restaurants/addOrder";
import { convertPrice } from "../../../../../utilities/convertPrice";

export default function Order({ setblock, popupHandler, restaurant }) {
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const cart = useSelector((state) => state.cart[restaurantName] || []); // Fetch the cart for the specific restaurant

  const dispatch = useDispatch();
  const { handleApiCall: handleAddOrder, isPending } = useAddOrderQuery({
    onSuccess: () => {

    }
  });

  const [details, setDetails] = useState({
    fullName: "",
    phoneNumber: "",
    fullAddress: "",
    note: "",
  });
  const hasOnlineBranch = () => {
    return restaurant?.branches.some(branch => branch.is_online);

  }

  const [selectedBranch, setSelectedBranch] = useState(!hasOnlineBranch() ? "" : restaurant?.branches[0]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [regions, setRegions] = useState([""]);

  const [errors, setErrors] = useState({});
  const [deliveryType, setDeliveryType] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  let currencySymbol;
  switch (restaurant?.currency) {
    case "dollar":
      currencySymbol = "$";
      break;
    case "lb":
      currencySymbol = "L.L.";
      break;
    case "gram":
      currencySymbol = "g";
      break;
    case "kilogram":
      currencySymbol = "kg";
      break;
    default:
      currencySymbol = ""; // No currency or unsupported currency
  }


  const handlePurchase = () => {
    let newErrors;
    if (deliveryType == "Delivery") {
      newErrors = {
        fullName: !details.fullName ? "Full Name is required." : "",
        phoneNumber: !details.phoneNumber ? "Phone Number is required." : "",
        fullAddress: !details.fullAddress ? "Full Address is required for delivery." : "",
        deliveryType: !deliveryType ? "Delivery Type is required." : "",
        branch: !selectedBranch ? "Branch is required" : "",
        region: (!selectedRegion && selectedBranch && regions.length > 0) ? "Region is required" : "",

      };
    } else {
      if (deliveryType == "DineIn") {
        newErrors = {
          fullName: !details.fullName ? "Full Name is required." : "",
          phoneNumber: !details.phoneNumber ? "Phone Number is required." : "",
          deliveryType: !deliveryType ? "Delivery Type is required." : "",
          branch: !selectedBranch ? "Branch is required" : "",
          tableNumber: !details.tableNumber ? "Table Number is required." : "",

        };
      } else {
        newErrors = {
          fullName: !details.fullName ? "Full Name is required." : "",
          phoneNumber: !details.phoneNumber ? "Phone Number is required." : "",
          deliveryType: !deliveryType ? "Delivery Type is required." : "",
          branch: !selectedBranch ? "Branch is required" : "",
        };
      }
    }


    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    let message = `Hello *${restaurantName}*\n`;
    message += `It's *${details.fullName}* and I want to purchase the following items:\n`;
    message += `Order Type: *${deliveryType}*\n`;

    let totalPrice = 0;

    cart.forEach((item) => {
      message += `• ${item.quantity} of *${restaurant.languages == "ar" ? item.ar_name : item.en_name}*`;
      message += `(${restaurant.languages=="ar"?item.category.ar_category:item.category.en_category})\n`;

      if (item.formData) {
        Object.keys(item.formData).forEach((key) => {
          const value = item.formData[key];
          if (Array.isArray(value)) {
            message += `  - ${key}: ${value.join(", ")}\n`;
          } else if (typeof value === "object" && value !== null) {
            message += `  - ${key}: ${value.label}\n`;
          } else {
            message += `  - ${key}: ${value}\n`;
          }
        });
      }
      if (item.instruction) {
        message += `  - Special Insruction: ${item.instruction}\n`;
      }

      message += `  - Price: ${item.price * item.quantity} ${currencySymbol}\n`;
      totalPrice += item.price * item.quantity;
    });

    message += `Total Price: ${convertPrice(totalPrice,currencySymbol)}\n\n`;
    message += `Contact Info:\n`;
    message += `- Name: ${details.fullName}\n`;
    if (selectedRegion) {
      message += `- Region: ${selectedRegion}\n`;
    }
    message += `- Phone Number: ${details.phoneNumber}\n`;
    if (deliveryType === "Delivery") {
      message += `- Address: ${details.fullAddress}\n`;
    }
    if (deliveryType === "DineIn") {
      message += `- Table Number: ${details.tableNumber}\n`;
    }
    if(details.note){
      message += `- Order notes: ${details.note || "None"}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    let whatsappUrl = "", newWhatsappNumber = "";
    if (!selectedBranch.whatsapp_number) {
      whatsappUrl = `https://wa.me/${restaurant.phone_number}?text=${encodedMessage}`;
    } else {
      newWhatsappNumber = selectedBranch?.whatsapp_number?.startsWith("961")
        ? selectedBranch?.whatsapp_number
        : "961" + selectedBranch?.whatsapp_number;
      whatsappUrl = `https://wa.me/${newWhatsappNumber}?text=${encodedMessage}`;

    }
    //log order to database
    const simplifiedCart = cart.map(item => ({
      id: item.id,
      quantity: item.quantity,
      branch_id: selectedBranch?.id,
      restaurant_id: restaurant.id
    }));

    handleAddOrder({ products: simplifiedCart,restaurant_id:restaurant.id,branch_id:selectedBranch?.id,delivery_type:deliveryType })

    window.open(whatsappUrl, "_blank");
    dispatch(clearCart(restaurantName));
    setblock("cart");
    popupHandler(null);
  };


  return (
    <Wrapper>
      <BackIcon
        onClick={() => {
          setblock("cart");
        }}
      />
      <Title>Enter Your Details</Title>
      <Select
        value={deliveryType}
        onChange={(e) => {
          setDeliveryType(e.target.value);
          setSelectedBranch(!hasOnlineBranch() ? "" : restaurant?.branches[0])
          setErrors({})
        }}
      >
        <option value="">Select Order Type</option>
        <option value="Delivery">Delivery</option>
        <option value="TakeAway">TakeAway</option>
        <option value="DineIn">DineIn</option>

      </Select>
      {errors.deliveryType && <Error>{errors.deliveryType}</Error>}
      {(restaurant?.branches.length != 0 && !hasOnlineBranch()) && <BranchSelect deliveryType={deliveryType} branches={restaurant?.branches} selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} setErrors={setErrors} errors={errors} />}
      {errors.branch && <Error>{errors.branch}</Error>}

      {(selectedBranch && deliveryType === "Delivery" && regions.length > 0) && <RegionSelect selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} selectedBranch={restaurant?.branches.length == 1 ? restaurant?.branches[0] : selectedBranch} setErrors={setErrors} errors={errors} setRegions={setRegions} />}
      {errors.region && <Error>{errors.region}</Error>}


      <Input
        type="text"
        name="fullName"
        value={details.fullName}
        onChange={handleChange}
        placeholder="Full Name"
      />
      {errors.fullName && <Error>{errors.fullName}</Error>}
      <Input
        type="text"
        name="phoneNumber"
        value={details.phoneNumber}
        onChange={handleChange}
        placeholder="PhoneNumber"
      />
      {errors.phoneNumber && <Error>{errors.phoneNumber}</Error>}
      {deliveryType == "Delivery" && (
        <>

          <NoteTextArea
            name="fullAddress"
            value={details.fullAddress}
            onChange={handleChange}
            placeholder="Full Address"
          ></NoteTextArea>


          {errors.fullAddress && <Error>{errors.fullAddress}</Error>}
        </>
      )}
      {deliveryType == "DineIn" && (
        <>

          <Input
            type="number"
            name="tableNumber"
            value={details.tableNumber}
            onChange={handleChange}
            placeholder="Table Number"
          />


          {errors.tableNumber && <Error>{errors.tableNumber}</Error>}
        </>
      )}
      <NoteTextArea
        name="note"
        value={details.note}
        onChange={handleChange}
        placeholder="Note..."
      ></NoteTextArea>
      <Purchase onClick={handlePurchase}>Purchase</Purchase>
    </Wrapper>
  );
}
