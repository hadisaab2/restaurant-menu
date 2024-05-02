import React, { useState } from "react";
import {
  Container,
  Close,
  Wrapper,
  Title,
  Border,
  ItemsWrap,
  ItemsContainer,
  ImageContainer,
  Image,
  PriceContainer,
  QuantityContainer,
  Name,
  Price,
  Purchase,
  DeleteIcon,
  NoItems,
  QuantityWrapper,
  Plus,
  Quantity,
  Minus,
  TotalPrice,
} from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adjustQuantity, clearCart, removeFromCart } from "../../../../redux/cart/cartActions";
export default function CartPopup({
  restaurant,
  showPopup,
  popupHandler = { popupHandler },
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { restaurantName } = useParams();
  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handlePurchase = () => {
    let message = `Hello *${restaurantName}*\n`;
    message += "I want to purchase the following items:\n";
    cart.forEach(item => {
        message +=`• ${item.quantity} of *${item.en_name}* \n`; // Add each item to the message
    });
    message += "Thank you.";
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '96171112521'; // Replace with your business's phone number
    const whatsappUrl = `https://wa.me/${restaurant.phone_number}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank'); // Open WhatsApp in a new tab/window
    dispatch(clearCart());
    popupHandler(null);
};

const handleIncrement = (id,quantity) => {
    dispatch(adjustQuantity(id, quantity + 1));
};

const handleDecrement = (id,quantity) => {
    if (quantity > 1) {
        dispatch(adjustQuantity(id, quantity - 1));
    }
};
const totalPrice = cart.reduce((total, item) => {
    return total + item.en_price * item.quantity;
}, 0);
  return (
    <Container showPopup={showPopup}>
      <Close
        onClick={() => {
          popupHandler(null);
        }}
      />
      <Wrapper>
        <Title>My Cart</Title>
        <Border />
        {cart.length>0?
        <>
        <ItemsWrap>
          {cart.map((item) => {
            return (
              <>
                <ItemsContainer>
                  <DeleteIcon
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                  />
                  <ImageContainer>
                    <Image
                      src={`https://storage.googleapis.com/ecommerce-bucket-testing/${item.images[0].url}`}
                    />
                  </ImageContainer>
                  <PriceContainer>
                    <Name>
                      {activeLanuguage === "en" ? item.en_name : item.ar_name}
                    </Name>
                    <Price>{item.en_price} $</Price>
                  </PriceContainer>
                  <QuantityContainer>
                    <QuantityWrapper>
                        <Plus onClick={()=>{handleIncrement(item.id,item.quantity)}}>+</Plus>
                        <Quantity>{item.quantity}</Quantity>
                        <Minus onClick={()=>{handleDecrement(item.id,item.quantity)}}>-</Minus>
                    </QuantityWrapper>
                  </QuantityContainer>
                </ItemsContainer>
                <Border />
              </>
            );
          })}
        </ItemsWrap>
        <TotalPrice>Total Price : {totalPrice.toFixed(2)} $</TotalPrice>

                <Purchase onClick={handlePurchase} >Purchase</Purchase>
                </>
        :<NoItems>
        No Items In Cart
        </NoItems>}
      </Wrapper>
    </Container>
  );
}
