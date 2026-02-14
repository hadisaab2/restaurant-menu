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
  LogoutMobile,
  AccessNotice,
  AccessNoticeTitle,
  AccessNoticeText
} from "./style";
import Products from "./products";
import Settings from "./settings";
import Categories from "./categories";
import { getCookie, deleteCookie } from "../../utilities/manageCookies";
import { useNavigate } from "react-router-dom";
import { ADMINSIGNIN } from "../../routes/URLs";
import Report from "./report";
import Feedbacks from "./feedbacks";
import QuestionsSuggestions from "./questions";
import Orders from "./orders";
import Customers from "./customers";
import Analytics from "./analytics";



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

  const isTheme3 = Number(userInformation?.template_id) === 3;
  const isFeedbacksSection = section === "Feedbacks";
  const isQuestionsSection = section === "QuestionsSuggestions";
  const isRestrictedSection = isFeedbacksSection || isQuestionsSection;

  const onClickBurger=()=>{
    setShowMobileSidebar(!showMobileSidebar)
  }

  const handlesection= (section)=>{
    setSection(section)
    setShowMobileSidebar(!showMobileSidebar)

  }

  


  const sectionLabelMap = {
    Categories: "Categories",
    Products: "Products",
    Settings: "Settings",
    Report: "Report",
    Feedbacks: "Feedbacks",
    QuestionsSuggestions: "Questions & Suggestions",
    Orders: "Orders",
    Customers: "Customers",
    Analytics: "Analytics",
  };

  return (
    <Container>
      <MobileSidebar $showMobileSidebar={showMobileSidebar}>
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
          <Tab  onClick={() =>handlesection("Report")}>
            <CateogoryIcon />
            <TabText>Report</TabText>
          </Tab>
          <Tab $disabled={!isTheme3} onClick={() => handlesection("Feedbacks")}>
            <CateogoryIcon />
            <TabText>Feedbacks</TabText>
          </Tab>
          <Tab
            $disabled={!isTheme3}
            onClick={() => handlesection("QuestionsSuggestions")}
          >
            <CateogoryIcon />
            <TabText>Questions & Suggestions</TabText>
          </Tab>
          <Tab onClick={() => handlesection("Orders")}>
            <CateogoryIcon />
            <TabText>Orders</TabText>
          </Tab>
          <Tab onClick={() => handlesection("Customers")}>
            <CateogoryIcon />
            <TabText>Customers</TabText>
          </Tab>
          <Tab onClick={() => handlesection("Analytics")}>
            <CateogoryIcon />
            <TabText>Analytics</TabText>
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
          <Tab onClick={() => setSection("Report")}>
            <CateogoryIcon />
            <TabText>Report</TabText>
          </Tab>
          <Tab $disabled={!isTheme3} onClick={() => setSection("Feedbacks")}>
            <CateogoryIcon />
            <TabText>Feedbacks</TabText>
          </Tab>
          <Tab
            $disabled={!isTheme3}
            onClick={() => setSection("QuestionsSuggestions")}
          >
            <CateogoryIcon />
            <TabText>Questions & Suggestions</TabText>
          </Tab>
          <Tab onClick={() => setSection("Orders")}>
            <CateogoryIcon />
            <TabText>Orders</TabText>
          </Tab>
          <Tab onClick={() => setSection("Customers")}>
            <CateogoryIcon />
            <TabText>Customers</TabText>
          </Tab>
          <Tab onClick={() => setSection("Analytics")}>
            <CateogoryIcon />
            <TabText>Analytics</TabText>
          </Tab>
        </SidebarContent>
        <SidebarBottom>
          <ProfileIcon />
          <Username>{userInformation?.username || "user"}</Username>
        </SidebarBottom>
      </Sidebar>
      <Content>
        <Header>
          <Path>Admin / {sectionLabelMap[section] || section}</Path>
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
        {section == "Report" && <Report userInformation={userInformation}/>}
        {isRestrictedSection && !isTheme3 && (
          <AccessNotice>
            <AccessNoticeTitle>Feature unavailable</AccessNoticeTitle>
            <AccessNoticeText>
              This section is available only for Theme 3 restaurants. Please
              upgrade your package to enable Feedbacks and Questions &
              Suggestions.
            </AccessNoticeText>
          </AccessNotice>
        )}
        {section == "Feedbacks" && isTheme3 && <Feedbacks />}
        {section == "QuestionsSuggestions" && isTheme3 && (
          <QuestionsSuggestions />
        )}
        {section == "Orders" && <Orders />}
        {section == "Customers" && <Customers />}
        {section == "Analytics" && <Analytics />}

      </Content>
    </Container>
  );
}
