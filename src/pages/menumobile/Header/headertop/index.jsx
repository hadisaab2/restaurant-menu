import React from 'react'
import { Container,Brand } from './styles'
import { RxHamburgerMenu } from "react-icons/rx";
import addict from "./addict.png"
export default function HeaderTop() {
  return (
    <Container>
      <Brand src={addict}/>
      <RxHamburgerMenu size={"25px"} style={{position:"absolute",right:"20px"}}/>
    </Container>
  )
}
