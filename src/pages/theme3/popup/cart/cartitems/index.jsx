import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md';
import { adjustQuantity, removeFromCart } from '../../../../../redux/cart/cartActions';
import {
  Wrapper,
  Title,
  Border,
  ItemsWrap,
  ItemsContainer,
  ItemTopRow,
  ImageContainer,
  Image,
  PriceContainer,
  Name,
  Price,
  QuantityContainer,
  QuantityWrapper,
  Plus,
  Quantity,
  Minus,
  DeleteIcon,
  CustomizationsRow,
  SizePill,
  AddonChip,
  RemovalChip,
  NoteText,
  LegacyLine,
  TotalPrice,
  TotalLabel,
  TotalValue,
  Purchase,
  NoItems,
} from './styles';
import { convertPrice } from '../../../../../utilities/convertPrice';
import { cartItemFormDataToLines } from '../../../../../product-options/cartLabels';

/* ─── helpers ─── */
const SIZE_HEADINGS   = ["Size:", "الحجم:"];
const ADDON_HEADINGS  = ["Add ons:", "الإضافات:"];
const REMOVE_HEADINGS = ["Remove:", "بدون:"];

function groupCartBlocks(blocks) {
  const result = { sizeLabel: null, addonLabels: [], removalLabels: [], legacyLines: [] };
  let section = null;

  for (const b of blocks) {
    if (b.type === "heading") {
      if (SIZE_HEADINGS.includes(b.text))        section = "size";
      else if (ADDON_HEADINGS.includes(b.text))  section = "addons";
      else if (REMOVE_HEADINGS.includes(b.text)) section = "removals";
      else                                        section = "legacy";
    } else {
      if (section === "size")          result.sizeLabel = b.text;
      else if (section === "addons")   result.addonLabels.push(b.text);
      else if (section === "removals") result.removalLabels.push(b.text);
      else                             result.legacyLines.push(b.text);
    }
  }
  return result;
}

/* ─── component ─── */
export default function CartItems({ setblock }) {
  const dispatch = useDispatch();
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const cart       = useSelector((state) => state.cart[restaurantName] || []);
  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage
  );
  const lang = activeLanuguage === "ar" ? "ar" : "en";

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove    = (uid) => dispatch(removeFromCart(restaurantName, uid));
  const handleIncrement = (uid, qty) => dispatch(adjustQuantity(restaurantName, uid, qty + 1));
  const handleDecrement = (uid, qty) => {
    if (qty > 1) dispatch(adjustQuantity(restaurantName, uid, qty - 1));
  };

  let currencySymbol = "";
  switch (restaurant?.currency) {
    case "dollar":   currencySymbol = "$";    break;
    case "lb":       currencySymbol = "L.L."; break;
    case "gram":     currencySymbol = "g";    break;
    case "kilogram": currencySymbol = "kg";   break;
    default:         currencySymbol = "";
  }

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
          <LegacyLine key={i}>{line}</LegacyLine>
        ))}
      </>
    );
  };

  const imageUrl = (item) => {
    const img = item.images?.[0];
    if (!img) return "";
    return img.url
      ? `https://storage.googleapis.com/ecommerce-bucket-testing/${img.url}`
      : "";
  };

  return (
    <Wrapper>
      <Title>{lang === "ar" ? "سلة التسوق" : "My Cart"}</Title>
      <Border />

      {cart.length > 0 ? (
        <>
          <ItemsWrap>
            {cart.map((item) => {
              const name      = lang === "ar" ? item.ar_name : item.en_name;
              const linePrice = convertPrice(item.price * item.quantity, currencySymbol);

              return (
                <ItemsContainer key={item.uniqueId}>
                  <ItemTopRow>
                    <ImageContainer>
                      <Image src={imageUrl(item)} alt={name} />
                    </ImageContainer>

                    <PriceContainer>
                      <Name title={name}>{name}</Name>
                      <Price>{linePrice}</Price>
                      {renderCustomizations(item)}
                      {item.instruction && (
                        <NoteText>📝 {item.instruction}</NoteText>
                      )}
                    </PriceContainer>

                    <QuantityContainer>
                      <QuantityWrapper>
                        <Plus onClick={() => handleIncrement(item.uniqueId, item.quantity)}>+</Plus>
                        <Quantity>{item.quantity}</Quantity>
                        <Minus onClick={() => handleDecrement(item.uniqueId, item.quantity)}>−</Minus>
                      </QuantityWrapper>
                      <DeleteIcon onClick={() => handleRemove(item.uniqueId)}>
                        <MdOutlineDelete size={16} />
                      </DeleteIcon>
                    </QuantityContainer>
                  </ItemTopRow>
                </ItemsContainer>
              );
            })}
          </ItemsWrap>

          <TotalPrice>
            <TotalLabel>{lang === "ar" ? "الإجمالي" : "Total"}</TotalLabel>
            <TotalValue>{convertPrice(totalPrice, currencySymbol)}</TotalValue>
          </TotalPrice>

          <Purchase onClick={() => setblock("order")}>
            {lang === "ar" ? "متابعة" : "Continue"}
          </Purchase>
        </>
      ) : (
        <NoItems>
          {lang === "ar" ? "السلة فارغة" : "No Items In Cart"}
        </NoItems>
      )}
    </Wrapper>
  );
}
