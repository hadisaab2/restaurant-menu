import React from 'react'
import { Container,Brand } from './styles'
import { RxHamburgerMenu } from "react-icons/rx";

export default function HeaderTop() {
  return (
    <Container>
      <Brand>BRAND</Brand>
      <RxHamburgerMenu size={"25px"} style={{position:"absolute",right:"20px"}}/>
    </Container>
  )
}
