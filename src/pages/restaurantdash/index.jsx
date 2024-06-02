import React, { useEffect, useState,useRef } from "react";
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
  Logout,
  BurgerIcon,
  MobileSidebar,
  CloseIcon,
  LogoutMobile
} from "./style";
import Products from "./products";
import Settings from "./settings";
import Categories from "./categories";
import { getCookie, deleteCookie } from "../../utilities/manageCookies";
import { useNavigate } from "react-router-dom";
import { ADMINSIGNIN } from "../../routes/URLs";



export default function RestaurantDash() {
  const [section, setSection] = useState("Products");
  const [products, setProducts] = useState([]);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [userInformation, setUserInformation] = useState({});


  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = getCookie("userInfo") || "{}";
    setUserInformation(JSON.parse(storedUserInfo));
  }, []);

  const onClickBurger=()=>{
    setShowMobileSidebar(!showMobileSidebar)
  }

  const handlesection= (section)=>{
    setSection(section)
    setShowMobileSidebar(!showMobileSidebar)

  }

  


  return (
    <Container>
      <MobileSidebar showMobileSidebar={showMobileSidebar}>
      <SidebarTop>
          <Title>Menugic</Title>
          <CloseIcon onClick={onClickBurger}/>
        </SidebarTop>
        <SidebarContent>
          <Tab onClick={() =>handlesection("Categories")}>
            <CateogoryIcon />
            <TabText>Categories</TabText>
          </Tab>
          <Tab  onClick={() =>handlesection("Products")}>
            <CateogoryIcon />
            <TabText>Products</TabText>
          </Tab>
          <Tab  onClick={() =>handlesection("Settings")}>
            <CateogoryIcon />
            <TabText>Settings</TabText>
          </Tab>

        </SidebarContent>
        <SidebarBottom>
          <ProfileIcon />
          <Username>{userInformation?.username || "user"}</Username>

          <LogoutMobile
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              deleteCookie("accessToken");
              deleteCookie("userInfo");
              navigate(ADMINSIGNIN);
            }}

            
          >
            Logout
          </LogoutMobile>
        </SidebarBottom>

      </MobileSidebar>
      <Sidebar>
        <SidebarTop>
          <Title>Menugic</Title>
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
          <Logout
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              deleteCookie("accessToken");
              deleteCookie("userInfo");
              navigate(ADMINSIGNIN);
            }}

            
          >
            Logout
          </Logout>


          <BurgerIcon onClick={onClickBurger}/>
        </Header>
        {section == "Products" && (
          <Products setProducts={setProducts} products={products} />
        )}
        {section == "Settings" && <Settings userInformation={userInformation} setSection={setSection} />}
        {section == "Categories" && <Categories setProducts={setProducts} />}
      </Content>
    </Container>
  );
}
