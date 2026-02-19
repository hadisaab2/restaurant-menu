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
  const isOrdersSection = section === "Orders";
  const isCustomersSection = section === "Customers";
  const isAnalyticsSection = section === "Analytics";
  const isRestrictedSection = isFeedbacksSection || isQuestionsSection || isOrdersSection || isCustomersSection || isAnalyticsSection;

  const onClickBurger=()=>{
    setShowMobileSidebar(!showMobileSidebar)
  }

  const handlesection= (section)=>{
    // Prevent navigation to restricted sections if not Theme 3
    const restrictedSections = ["Feedbacks", "QuestionsSuggestions", "Orders", "Customers", "Analytics"];
    if (restrictedSections.includes(section) && !isTheme3) {
      return; // Don't navigate to restricted sections
    }
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
            <TabText>Feedbacks{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab
            $disabled={!isTheme3}
            onClick={() => handlesection("QuestionsSuggestions")}
          >
            <CateogoryIcon />
            <TabText>Questions & Suggestions{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3} onClick={() => handlesection("Orders")}>
            <CateogoryIcon />
            <TabText>Orders{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3} onClick={() => handlesection("Customers")}>
            <CateogoryIcon />
            <TabText>Customers{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3} onClick={() => handlesection("Analytics")}>
            <CateogoryIcon />
            <TabText>Analytics{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
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
          <Tab $disabled={!isTheme3} onClick={() => !isTheme3 ? null : setSection("Feedbacks")}>
            <CateogoryIcon />
            <TabText>Feedbacks{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab
            $disabled={!isTheme3}
            onClick={() => !isTheme3 ? null : setSection("QuestionsSuggestions")}
          >
            <CateogoryIcon />
            <TabText>Questions & Suggestions{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3} onClick={() => !isTheme3 ? null : setSection("Orders")}>
            <CateogoryIcon />
            <TabText>Orders{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3} onClick={() => !isTheme3 ? null : setSection("Customers")}>
            <CateogoryIcon />
            <TabText>Customers{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3} onClick={() => !isTheme3 ? null : setSection("Analytics")}>
            <CateogoryIcon />
            <TabText>Analytics{!isTheme3 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
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
              This section is available only for Theme 3 restaurants (VIP package). Please
              upgrade your package to enable {section === "Feedbacks" && "Feedbacks"}
              {section === "QuestionsSuggestions" && "Questions & Suggestions"}
              {section === "Orders" && "Orders"}
              {section === "Customers" && "Customers"}
              {section === "Analytics" && "Analytics"}.
            </AccessNoticeText>
          </AccessNotice>
        )}
        {section == "Feedbacks" && isTheme3 && <Feedbacks />}
        {section == "QuestionsSuggestions" && isTheme3 && (
          <QuestionsSuggestions />
        )}
        {section == "Orders" && isTheme3 && <Orders />}
        {section == "Customers" && isTheme3 && <Customers />}
        {section == "Analytics" && isTheme3 && <Analytics />}

      </Content>
    </Container>
  );
}
