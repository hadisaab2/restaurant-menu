import React from 'react'
import { Container } from './styles'
import PlatesMenu from './platesmenu'
import PlateDetails from './logo'

export default function index() {
  return (
    <Container>
        <PlatesMenu/>
        <PlateDetails/>
    </Container>
  )
}
