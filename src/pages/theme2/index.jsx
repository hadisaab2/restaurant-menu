import React, { useState } from 'react'
import { Container,SideContainer } from './styles'
import {menu} from "../../data"
import Categories from './Categories'
import Plates from './Plates'
export default function Theme2() {
  const [selectedCategory,setSelectedCategory]=useState(null)
  return (
    <Container>
      <SideContainer />
      <Categories selectedCategory={selectedCategory} menu={menu} setSelectedCategory={setSelectedCategory} />
      {menu.map(({category,items})=>{
        return(<Plates plates={items} categoryname={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>)
      })}
    </Container>
  )
}
