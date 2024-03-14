import React, { useEffect, useState } from "react";
import {
  CateogoryIcon,
  Container,
  Content,
  ProfileIcon,
  Sidebar,
  SidebarBottom,
  SidebarContent,
  SidebarTop,
  Username,
  Tab,
  TabText,
  Title,
  Header,
  Path,
} from "./style";
import Products from "./products";
import Settings from "./settings";
import Categories from "./categories";
import { getCookie } from "../../utilities/manageCookies";

export default function RestaurantDash() {
  const [section, setSection] = useState("Products");
  const [products, setProducts] = useState([]);
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    const storedUserInfo = getCookie("userInfo") || "{}";
    setUserInformation(JSON.parse(storedUserInfo));
  }, []);

  return (
    <Container>
      <Sidebar>
        <SidebarTop>
          <Title>PLATEAU</Title>
        </SidebarTop>
        <SidebarContent>
          <Tab onClick={() => setSection("Categories")}>
            <CateogoryIcon />
            <TabText>Categories</TabText>
          </Tab>
          <Tab onClick={() => setSection("Products")}>
            <CateogoryIcon />
            <TabText>Products</TabText>
          </Tab>
          <Tab onClick={() => setSection("Settings")}>
            <CateogoryIcon />
            <TabText>Settings</TabText>
          </Tab>
        </SidebarContent>
        <SidebarBottom>
          <ProfileIcon />
          <Username>{userInformation?.username || "user"}</Username>
        </SidebarBottom>
      </Sidebar>
      <Content>
        <Header>
          <Path>Admin / {section}</Path>
        </Header>
        {section == "Products" && (
          <Products setProducts={setProducts} products={products} />
        )}
        {section == "Settings" && <Settings />}
        {section == "Categories" && <Categories setProducts={setProducts} />}
      </Content>
    </Container>
  );
}
