import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { adjustQuantity, clearCart, removeFromCart } from '../../../../../redux/cart/cartActions';
import {
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

export default function CartItems({setblock}) {
    const dispatch = useDispatch();
    const { restaurantName: paramRestaurantName } = useParams();
  
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
  
    // Determine the restaurant name to use
    const restaurantName = (subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www") 
      ? subdomain 
      : paramRestaurantName;
      
  const cart = useSelector((state) => state.cart[restaurantName] || []); // Fetch the cart for the specific restaurant

  // Calculate total price for the specific restaurant's cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.en_price * item.quantity;
  }, 0);

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  const handleRemove = (uniqueId) => {
    dispatch(removeFromCart(restaurantName,uniqueId));
  };

  const handlePurchase = () => {
    setblock("order")
  };

  const handleIncrement = (uniqueId, quantity) => {
    dispatch(adjustQuantity(restaurantName,uniqueId, quantity + 1));
  };

  const handleDecrement = (uniqueId, quantity) => {
    if (quantity > 1) {
      dispatch(adjustQuantity(restaurantName,uniqueId, quantity - 1));
    }
  };
  return (
    <Wrapper>
        <Title>My Cart</Title>
        <Border />
        {cart.length > 0 ? (
          <>
            <ItemsWrap>
              {cart.map((item) => {
                return (
                  <>
                    <ItemsContainer>
                      <DeleteIcon
                        onClick={() => {
                          handleRemove(item.uniqueId);
                        }}
                      />
                      <ImageContainer>
                        <Image
                          src={`https://storage.googleapis.com/ecommerce-bucket-testing/${item.images[0].url}`}
                        />
                      </ImageContainer>
                      <PriceContainer>
                        <Name>
                          {activeLanuguage === "en"
                            ? item.en_name
                            : item.ar_name}
                        </Name>
                        <Price>{item.en_price} $</Price>
                      </PriceContainer>
                      <QuantityContainer>
                        <QuantityWrapper>
                          <Plus
                            onClick={() => {
                              handleIncrement(item.uniqueId, item.quantity);
                            }}
                          >
                            +
                          </Plus>
                          <Quantity>{item.quantity}</Quantity>
                          <Minus
                            onClick={() => {
                              handleDecrement(item.uniqueId, item.quantity);
                            }}
                          >
                            -
                          </Minus>
                        </QuantityWrapper>
                      </QuantityContainer>
                    </ItemsContainer>
                    <Border />
                  </>
                );
              })}
            </ItemsWrap>
            <TotalPrice>Total Price : {totalPrice.toFixed(2)} $</TotalPrice>

            <Purchase onClick={handlePurchase}>Continue</Purchase>
          </>
        ) : (
          <NoItems>No Items In Cart</NoItems>
        )}
      </Wrapper>
  )
}
