import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { adjustQuantity, removeFromCart } from "../../../../../redux/cart/cartActions";
import { convertPrice } from "../../../../../utilities/convertPrice";
import {
  CartStepContainer,
  ItemsList,
  CartItem,
  ItemTopRow,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemActions,
  ItemPrice,
  ItemDetails,
  CustomizationsRow,
  SizePill,
  AddonChip,
  RemovalChip,
  NoteText,
  QuantityControls,
  QuantityButton,
  QuantityValue,
  DeleteButton,
  TotalContainer,
  TotalRow,
  TotalLabel,
  TotalPrice,
  EmptyCart,
} from "./CartStepStyles";
import { FaTrash } from "react-icons/fa";
import { cartItemFormDataToLines } from "../../../../../product-options/cartLabels";

/* ─── helpers ─── */

const SIZE_HEADINGS   = ["Size:", "الحجم:"];
const ADDON_HEADINGS  = ["Add ons:", "الإضافات:"];
const REMOVE_HEADINGS = ["Remove:", "بدون:"];

function groupCartBlocks(blocks) {
  const result = {
    sizeLabel: null,
    addonLabels: [],
    removalLabels: [],
    legacyLines: [],
  };
  let section = null;

  for (const b of blocks) {
    if (b.type === "heading") {
      if (SIZE_HEADINGS.includes(b.text))        section = "size";
      else if (ADDON_HEADINGS.includes(b.text))  section = "addons";
      else if (REMOVE_HEADINGS.includes(b.text)) section = "removals";
      else                                        section = "legacy";
    } else {
      if (section === "size")       result.sizeLabel = b.text;
      else if (section === "addons")   result.addonLabels.push(b.text);
      else if (section === "removals") result.removalLabels.push(b.text);
      else                             result.legacyLines.push(b.text);
    }
  }
  return result;
}

/* ─── component ─── */

export default function CartStep({ restaurant, activeLanguage }) {
  const dispatch = useDispatch();
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const cart = useSelector((state) => state.cart[restaurantName] || []);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove    = (uid) => dispatch(removeFromCart(restaurantName, uid));
  const handleIncrement = (uid, qty) => dispatch(adjustQuantity(restaurantName, uid, qty + 1));
  const handleDecrement = (uid, qty) => {
    if (qty > 1) dispatch(adjustQuantity(restaurantName, uid, qty - 1));
  };

  const lang = activeLanguage === "ar" ? "ar" : "en";

  const renderCustomizations = (item) => {
    const blocks = cartItemFormDataToLines(item, lang);
    if (!blocks.length) return null;

    const { sizeLabel, addonLabels, removalLabels, legacyLines } = groupCartBlocks(blocks);

    const hasVisual = sizeLabel || addonLabels.length || removalLabels.length;

    return (
      <>
        {hasVisual && (
          <CustomizationsRow>
            {sizeLabel && (
              <SizePill>
                {lang === "ar" ? `الحجم: ${sizeLabel}` : `Size: ${sizeLabel}`}
              </SizePill>
            )}
            {addonLabels.map((label) => (
              <AddonChip key={label}>+ {label}</AddonChip>
            ))}
            {removalLabels.map((label) => (
              <RemovalChip key={label}>{label}</RemovalChip>
            ))}
          </CustomizationsRow>
        )}
        {legacyLines.map((line, i) => (
          <ItemDetails key={i}>{line}</ItemDetails>
        ))}
      </>
    );
  };

  let currencySymbol = "";
  switch (restaurant?.currency) {
    case "dollar":    currencySymbol = "$";    break;
    case "lb":        currencySymbol = "L.L."; break;
    case "gram":      currencySymbol = "g";    break;
    case "kilogram":  currencySymbol = "kg";   break;
    default:          currencySymbol = "";
  }

  if (cart.length === 0) {
    return (
      <CartStepContainer>
        <EmptyCart>
          {lang === "ar" ? "السلة فارغة" : "Your cart is empty"}
        </EmptyCart>
      </CartStepContainer>
    );
  }

  const imageUrl = (item) => {
    const img = item.images?.[0];
    if (!img) return "";
    return img.url
      ? `https://storage.googleapis.com/ecommerce-bucket-testing/${img.url}`
      : "";
  };

  return (
    <CartStepContainer>
      <ItemsList>
        {cart.map((item) => {
          const name = lang === "ar" ? item.ar_name : item.en_name;
          const linePrice = convertPrice(item.price * item.quantity, currencySymbol);

          return (
            <CartItem key={item.uniqueId}>
              <ItemTopRow>
                <ItemImage src={imageUrl(item)} alt={name} />

                <ItemInfo>
                  <ItemName title={name}>{name}</ItemName>
                  {renderCustomizations(item)}
                  {item.instruction && (
                    <NoteText>📝 {item.instruction}</NoteText>
                  )}
                </ItemInfo>

                <ItemActions>
                  <ItemPrice>{linePrice}</ItemPrice>
                  <QuantityControls>
                    <QuantityButton
                      onClick={() => handleDecrement(item.uniqueId, item.quantity)}
                      disabled={item.quantity <= 1}
                      aria-label="decrease quantity"
                    >
                      −
                    </QuantityButton>
                    <QuantityValue>{item.quantity}</QuantityValue>
                    <QuantityButton
                      onClick={() => handleIncrement(item.uniqueId, item.quantity)}
                      aria-label="increase quantity"
                    >
                      +
                    </QuantityButton>
                  </QuantityControls>
                  <DeleteButton
                    onClick={() => handleRemove(item.uniqueId)}
                    aria-label="remove item"
                  >
                    <FaTrash />
                  </DeleteButton>
                </ItemActions>
              </ItemTopRow>
            </CartItem>
          );
        })}

        <TotalContainer>
          <TotalRow>
            <TotalLabel>
              {lang === "ar" ? "الإجمالي" : "Total"}
            </TotalLabel>
            <TotalPrice>{convertPrice(totalPrice, currencySymbol)}</TotalPrice>
          </TotalRow>
        </TotalContainer>
      </ItemsList>
    </CartStepContainer>
  );
}
