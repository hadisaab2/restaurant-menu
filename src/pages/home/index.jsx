import React from 'react'
import { Container } from './styles'
import PlatesMenu from './platesmenu'
import PlateDetails from './platedetails'

export default function index() {
  return (
    <Container>
        <PlatesMenu/>
        <PlateDetails/>
    </Container>
  )
}
