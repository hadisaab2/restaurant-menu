import React from 'react'
import { Container,Brand } from './styles'
import thecage from "./thecage.png"
import { useParams } from 'react-router-dom';
import { restaurantmenus } from '../../../../data';
export default function HeaderTop() {
  const { restaurantName: paramRestaurantName } = useParams();
  
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];

  // Determine the restaurant name to use
  const restaurantName = (subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www") 
    ? subdomain 
    : paramRestaurantName;

  let logo=restaurantmenus.find((restaurant) => restaurant.name === restaurantname).logo

  return (
    <Container>
      <Brand src={thecage}/>
    </Container>
  )
}
