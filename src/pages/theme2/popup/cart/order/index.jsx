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

  const [details, setDetails] = useState({
    fullName: "",
    phoneNumber: "",
    fullAddress: "",
    note: "",
  });
  const hasOnlineBranch= ()=>{
    return restaurant?.branches.some(branch => branch.is_online);

  }

  const [selectedBranch, setSelectedBranch] = useState(!hasOnlineBranch()?"":restaurant?.branches[0]);
  const [selectedRegion, setSelectedRegion] = useState("");
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



  const handlePurchase = () => {
    let newErrors;
    if(deliveryType=="Delivery"){
       newErrors = {
        fullName: !details.fullName ? "Full Name is required." : "",
        phoneNumber: !details.phoneNumber ? "Phone Number is required." : "",
        fullAddress: !details.fullAddress? "Full Address is required for delivery.": "",
        deliveryType: !deliveryType ? "Delivery Type is required." : "",
        branch: !selectedBranch ? "Branch is required" : "",
        region: (!selectedRegion && selectedBranch) ? "Region is required" : "",
  
      };
    }else{
      newErrors = {
        fullName: !details.fullName ? "Full Name is required." : "",
        phoneNumber: !details.phoneNumber ? "Phone Number is required." : "",
        deliveryType: !deliveryType ? "Delivery Type is required." : "",
        branch: !selectedBranch ? "Branch is required" : "",
      };
    }
   

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setblock("order");
    let message = `Hello *${restaurantName}*\n`;
    message += `It's *${details.fullName}* and I want to purchase the following items:\n`;

    let totalPrice = 0;

    cart.forEach((item) => {
      message += `• ${item.quantity} of *${item.en_name}* \n`;

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

      message += `  - Price: ${item.price * item.quantity}\n`;
      totalPrice += item.price * item.quantity;
    });

    message += `Total Price: ${totalPrice}\n\n`;
    message += `Contact Info:\n`;
    message += `- Name: ${details.fullName}\n`;
    message += `- Phone Number: ${details.phoneNumber}\n`;
    message += `- Order type: ${deliveryType}\n`;
    if (deliveryType === "Delivery") {
      message += `- Address: ${details.fullAddress}\n`;
    }
    message += `- Order notes: ${details.note || "None"}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${restaurant.phone_number}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    dispatch(clearCart(restaurantName));
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
          setErrors({})
        }}
      >
        <option value="">Select Order Type</option>
        <option value="Delivery">Delivery</option>
        <option value="TakeAway">TakeAway</option>
        <option value="DineIn">DineIn</option>

      </Select>
      {errors.deliveryType && <Error>{errors.deliveryType}</Error>}
        {(restaurant?.branches.length!=0 && !hasOnlineBranch()) && <BranchSelect branches={restaurant?.branches} selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} setErrors={setErrors} errors={errors}/>}
        {errors.branch && <Error>{errors.branch}</Error>}

        {(selectedBranch && deliveryType === "Delivery") && <RegionSelect selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} selectedBranch={restaurant?.branches.length == 1 ? restaurant?.branches[0] : selectedBranch} setErrors={setErrors} errors={errors} />}
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
          <Input
            type="text"
            name="fullAddress"
            value={details.fullAddress}
            onChange={handleChange}
            placeholder="Full Address"
          />
          {errors.fullAddress && <Error>{errors.fullAddress}</Error>}
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
