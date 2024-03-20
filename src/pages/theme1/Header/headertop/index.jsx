import React from 'react'
import { Container,Brand } from './styles'
import { useSelector } from 'react-redux';
export default function HeaderTop() {
  const restaurant = useSelector((state) => state.restaurant);

  return (
    <Container>
      <Brand src={restaurant.logoURL && `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}/>
    </Container>
  )
}
