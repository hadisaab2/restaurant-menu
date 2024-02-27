import React from 'react'
import { Container,Brand } from './styles'
import addict from "./addict.png"
export default function HeaderTop() {
  return (
    <Container>
      <Brand src={addict}/>
    </Container>
  )
}
