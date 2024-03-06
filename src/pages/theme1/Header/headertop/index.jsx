import React from 'react'
import { Container,Brand } from './styles'
import LaMarsa from "./LaMarsa.png"
import { useParams } from 'react-router-dom';
import { restaurantmenus } from '../../../../data';
export default function HeaderTop() {
  const { restaurantname } = useParams();
  let logo=restaurantmenus.find((restaurant) => restaurant.name === restaurantname).logo

  return (
    <Container>
      <Brand src={logo}/>
    </Container>
  )
}
