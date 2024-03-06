import React, { useState } from 'react'
import { CateogoryIcon, Container, Content, ProfileIcon, Sidebar, SidebarBottom, SidebarContent, SidebarTop, Username,Tab, TabText,Title, Header, Path } from './style'
import Products from './products'
import Settings from './settings'

export default function RestaurantDash() {
    const [section,setSection]=useState("Products")
  return (
    <Container>
        <Sidebar>
            <SidebarTop>
                <Title>PLATEAU</Title>
            </SidebarTop>
            <SidebarContent>
                <Tab onClick={()=>setSection("Categories")}>
                    <CateogoryIcon/>
                    <TabText>Categories</TabText>

                </Tab>
                <Tab onClick={()=>setSection("Products")}>
                    <CateogoryIcon/>
                    <TabText>Products</TabText>

                </Tab>
                <Tab onClick={()=>setSection("Settings")}>
                    <CateogoryIcon/>
                    <TabText>Settings</TabText>

                </Tab>
                

            </SidebarContent>
            <SidebarBottom>
                <ProfileIcon/>
                <Username>Addict Burger</Username>
            </SidebarBottom>
        </Sidebar>
        <Content>
            <Header>
                <Path>Admin / {section}</Path>
            </Header>
            {section=="Products" && <Products/>}
            {section=="Settings" && <Settings/>}

        </Content>
    </Container>
  )
}
