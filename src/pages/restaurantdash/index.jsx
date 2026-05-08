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
  Logout,
  BurgerIcon,
  MobileSidebar,
  MobileSidebarBackdrop,
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

  const handlesection = (section) => {
    const restrictedSections = [
      "Feedbacks",
      "QuestionsSuggestions",
      "Orders",
      "Customers",
      "RegisteredCustomers",
      "Analytics",
    ];
    if (restrictedSections.includes(section) && !isTheme3Or4) {
      setShowMobileSidebar(false);
      return;
    }
    setSection(section);
    setShowMobileSidebar(false);
  };

  useEffect(() => {
    if (showMobileSidebar) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [showMobileSidebar]);

  


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
      <MobileSidebarBackdrop
        $open={showMobileSidebar}
        onClick={() => setShowMobileSidebar(false)}
        aria-hidden="true"
      />
      <MobileSidebar $showMobileSidebar={showMobileSidebar} role="dialog" aria-modal="true" aria-label="Navigation menu">
      <SidebarTop>
          <Title>Menugic</Title>
          <CloseIcon onClick={onClickBurger} aria-label="Close menu" />
        </SidebarTop>
        <SidebarContent>
          <Tab $active={section === "Dashboard"} onClick={() => handlesection("Dashboard")}>
            <CateogoryIcon />
            <TabText>Dashboard</TabText>
          </Tab>
          <Tab $active={section === "Categories"} onClick={() => handlesection("Categories")}>
            <CateogoryIcon />
            <TabText>Categories</TabText>
          </Tab>
          <Tab $active={section === "Products"} onClick={() => handlesection("Products")}>
            <CateogoryIcon />
            <TabText>Products</TabText>
          </Tab>
          <Tab $active={section === "Settings"} onClick={() => handlesection("Settings")}>
            <CateogoryIcon />
            <TabText>Settings</TabText>
          </Tab>
          <Tab $active={section === "Report"} onClick={() => handlesection("Report")}>
            <CateogoryIcon />
            <TabText>Report</TabText>
          </Tab>
          <Tab $active={section === "Feedbacks"} $disabled={!isTheme3Or4} onClick={() => handlesection("Feedbacks")}>
            <CateogoryIcon />
            <TabText>Feedbacks{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab
            $active={section === "QuestionsSuggestions"}
            $disabled={!isTheme3Or4}
            onClick={() => handlesection("QuestionsSuggestions")}
          >
            <CateogoryIcon />
            <TabText>Questions & Suggestions{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $active={section === "Orders"} $disabled={!isTheme3Or4} onClick={() => handlesection("Orders")}>
            <CateogoryIcon />
            <TabText>Orders{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $active={section === "Customers"} $disabled={!isTheme3Or4} onClick={() => handlesection("Customers")}>
            <CateogoryIcon />
            <TabText>Customers{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $active={section === "RegisteredCustomers"} $disabled={!isTheme3Or4} onClick={() => handlesection("RegisteredCustomers")}>
            <CateogoryIcon />
            <TabText>Registered customers{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $active={section === "Analytics"} $disabled={!isTheme3Or4} onClick={() => handlesection("Analytics")}>
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
          <Tab $active={section === "Dashboard"} onClick={() => setSection("Dashboard")}>
            <CateogoryIcon />
            <TabText>Dashboard</TabText>
          </Tab>
          <Tab $active={section === "Categories"} onClick={() => setSection("Categories")}>
            <CateogoryIcon />
            <TabText>Categories</TabText>
          </Tab>
          <Tab $active={section === "Products"} onClick={() => setSection("Products")}>
            <CateogoryIcon />
            <TabText>Products</TabText>
          </Tab>
          <Tab $active={section === "Settings"} onClick={() => setSection("Settings")}>
            <CateogoryIcon />
            <TabText>Settings</TabText>
          </Tab>
          <Tab $active={section === "Report"} onClick={() => setSection("Report")}>
            <CateogoryIcon />
            <TabText>Report</TabText>
          </Tab>
          <Tab $active={section === "Feedbacks"} $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("Feedbacks")}>
            <CateogoryIcon />
            <TabText>Feedbacks{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab
            $active={section === "QuestionsSuggestions"}
            $disabled={!isTheme3Or4}
            onClick={() => !isTheme3Or4 ? null : setSection("QuestionsSuggestions")}
          >
            <CateogoryIcon />
            <TabText>Questions & Suggestions{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $active={section === "Orders"} $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("Orders")}>
            <CateogoryIcon />
            <TabText>Orders{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $active={section === "Customers"} $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("Customers")}>
            <CateogoryIcon />
            <TabText>Customers{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $active={section === "RegisteredCustomers"} $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("RegisteredCustomers")}>
            <CateogoryIcon />
            <TabText>Registered customers{!isTheme3Or4 && <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>(VIP package)</span>}</TabText>
          </Tab>
          <Tab $active={section === "Analytics"} $disabled={!isTheme3Or4} onClick={() => !isTheme3Or4 ? null : setSection("Analytics")}>
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


          <BurgerIcon onClick={onClickBurger} aria-label="Open menu" aria-expanded={showMobileSidebar}>
            <span />
          </BurgerIcon>
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
