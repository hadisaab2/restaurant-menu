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
import RegisteredCustomers from "./registeredCustomers";
import Customers from "./customers";
import Analytics from "./analytics";
import Dashboard from "./dashboard";



export default function RestaurantDash() {
  const [section, setSection] = useState("Dashboard");
  const [products, setProducts] = useState([]);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [userInformation, setUserInformation] = useState({});


  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = getCookie("userInfo") || "{}";
    setUserInformation(JSON.parse(storedUserInfo));
  }, []);

  const isTheme3Or4 = Number(userInformation?.template_id) === 3 || Number(userInformation?.template_id) === 4;
  const isFeedbacksSection = section === "Feedbacks";
  const isQuestionsSection = section === "QuestionsSuggestions";
  const isOrdersSection = section === "Orders";
  const isCustomersSection = section === "Customers";
  const isRegisteredCustomersSection = section === "RegisteredCustomers";
  const isAnalyticsSection = section === "Analytics";
  const isRestrictedSection =
    isFeedbacksSection ||
    isQuestionsSection ||
    isOrdersSection ||
    isCustomersSection ||
    isRegisteredCustomersSection ||
    isAnalyticsSection;

  const onClickBurger=()=>{
    setShowMobileSidebar(!showMobileSidebar)
  }

  const handlesection= (section)=>{
    // Prevent navigation to restricted sections if not Theme 3 or 4
    const restrictedSections = ["Feedbacks", "QuestionsSuggestions", "Orders", "Customers", "Analytics"];
    if (restrictedSections.includes(section) && !isTheme3Or4) {
      return; // Don't navigate to restricted sections
    }
    setSection(section)
    setShowMobileSidebar(!showMobileSidebar)
  }

  


  const sectionLabelMap = {
    Dashboard: "Dashboard",
    Categories: "Categories",
    Products: "Products",
    Settings: "Settings",
    Report: "Report",
    Feedbacks: "Feedbacks",
    QuestionsSuggestions: "Questions & Suggestions",
    Orders: "Orders",
    Customers: "Customers",
    RegisteredCustomers: "Registered customers",
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
          <Tab onClick={() =>handlesection("Dashboard")}>
            <CateogoryIcon />
            <TabText>Dashboard</TabText>
          </Tab>
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
          <Tab $disabled={!isTheme3Or4} onClick={() => handlesection("Feedbacks")}>
            <CateogoryIcon />
            <TabText>Feedbacks{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab
            $disabled={!isTheme3Or4}
            onClick={() => handlesection("QuestionsSuggestions")}
          >
            <CateogoryIcon />
            <TabText>Questions & Suggestions{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3Or4} onClick={() => handlesection("Orders")}>
            <CateogoryIcon />
            <TabText>Orders{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3Or4} onClick={() => handlesection("Customers")}>
            <CateogoryIcon />
            <TabText>Customers{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3Or4} onClick={() => handlesection("RegisteredCustomers")}>
            <CateogoryIcon />
            <TabText>Registered customers{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3Or4} onClick={() => handlesection("Analytics")}>
            <CateogoryIcon />
            <TabText>Analytics{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
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
          <Tab onClick={() => setSection("Dashboard")}>
            <CateogoryIcon />
            <TabText>Dashboard</TabText>
          </Tab>
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
          <Tab $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("Feedbacks")}>
            <CateogoryIcon />
            <TabText>Feedbacks{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab
            $disabled={!isTheme3Or4}
            onClick={() => !isTheme3Or4 ? null : setSection("QuestionsSuggestions")}
          >
            <CateogoryIcon />
            <TabText>Questions & Suggestions{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("Orders")}>
            <CateogoryIcon />
            <TabText>Orders{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("Customers")}>
            <CateogoryIcon />
            <TabText>Customers{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("RegisteredCustomers")}>
            <CateogoryIcon />
            <TabText>Registered customers{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("Analytics")}>
            <CateogoryIcon />
            <TabText>Analytics{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
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
        {section == "Dashboard" && (
          <Dashboard userInformation={userInformation} setSection={setSection} />
        )}
        {section == "Products" && (
          <Products setProducts={setProducts} products={products} />
        )}
        {section == "Settings" && <Settings userInformation={userInformation} setSection={setSection} />}
        {section == "Categories" && <Categories setProducts={setProducts} />}
        {section == "Report" && <Report userInformation={userInformation}/>}
        {isRestrictedSection && !isTheme3Or4 && (
          <AccessNotice>
            <AccessNoticeTitle>Feature unavailable</AccessNoticeTitle>
            <AccessNoticeText>
              This section is available only for Theme 3 or 4 restaurants (VIP package). Please
              upgrade your package to enable {section === "Feedbacks" && "Feedbacks"}
              {section === "QuestionsSuggestions" && "Questions & Suggestions"}
              {section === "Orders" && "Orders"}
              {section === "Customers" && "Customers"}
              {section === "RegisteredCustomers" && "Registered customers"}
              {section === "Analytics" && "Analytics"}.
            </AccessNoticeText>
          </AccessNotice>
        )}
        {section == "Feedbacks" && isTheme3Or4 && <Feedbacks />}
        {section == "QuestionsSuggestions" && isTheme3Or4 && (
          <QuestionsSuggestions />
        )}
        {section == "Orders" && isTheme3Or4 && <Orders />}
        {section == "Customers" && isTheme3Or4 && <Customers />}
        {section == "RegisteredCustomers" && isTheme3Or4 && <RegisteredCustomers />}
        {section == "Analytics" && isTheme3Or4 && <Analytics />}

      </Content>
    </Container>
  );
}
