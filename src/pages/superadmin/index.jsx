import React from 'react'
import { Container, TabsContainer ,Tab} from './styles'
import { useState } from 'react'
import Restaurants from './restaurants'

export default function SuperAdmin() {
    const[activeTab,setActiveTab]=useState(("Users"))
  return (
    <Container>
        <TabsContainer>
            <Tab onClick={()=>setActiveTab("Users")} activeTab={activeTab} tab={"Users"}>Users</Tab>
            <Tab onClick={()=>setActiveTab("Restaurants")} activeTab={activeTab} tab={"Restaurants"} >Restaurants</Tab>
        </TabsContainer>
        {activeTab=="Restaurants" && <Restaurants/>}
    </Container>
  )
}
