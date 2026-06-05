import React, { useState } from "react";
import {
  Container,
  PageHeader,
  PageTitle,
  PageSubtitle,
  TabsContainer,
  Tab,
  ContentArea,
} from "./styles";
import Restaurants from "./restaurants";
import Analytics from "./analytics";
import ErrorLogs from "./errorLogs";
import TemplateManager from "./templateManager";
import ColorThemeManager from "./colorThemeManager";
import Monitoring from "./monitoring";

export default function SuperAdmin() {
  const [activeTab, setActiveTab] = useState("Restaurants");

  return (
    <Container>
      <PageHeader>
        <PageTitle>Super Admin</PageTitle>
        <PageSubtitle>
          Manage restaurants, themes, and configurations
        </PageSubtitle>
      </PageHeader>

      <TabsContainer>
        <Tab
          onClick={() => setActiveTab("Restaurants")}
          activeTab={activeTab}
          tab="Restaurants"
        >
          Restaurants
        </Tab>
        <Tab
          onClick={() => setActiveTab("Analytics")}
          activeTab={activeTab}
          tab="Analytics"
        >
          Analytics
        </Tab>
        <Tab
          onClick={() => setActiveTab("Error Logs")}
          activeTab={activeTab}
          tab="Error Logs"
        >
          Error Logs
        </Tab>
        <Tab
          onClick={() => setActiveTab("Templates")}
          activeTab={activeTab}
          tab="Templates"
        >
          Templates
        </Tab>
        <Tab
          onClick={() => setActiveTab("Color Themes")}
          activeTab={activeTab}
          tab="Color Themes"
        >
          Color Themes
        </Tab>
        <Tab
          onClick={() => setActiveTab("Monitoring")}
          activeTab={activeTab}
          tab="Monitoring"
        >
          Monitoring
        </Tab>
      </TabsContainer>

      <ContentArea>
        {activeTab === "Restaurants" && <Restaurants />}
        {activeTab === "Analytics" && <Analytics />}
        {activeTab === "Error Logs" && <ErrorLogs />}
        {activeTab === "Templates" && <TemplateManager />}
        {activeTab === "Color Themes" && <ColorThemeManager />}
        {activeTab === "Monitoring" && <Monitoring />}
      </ContentArea>
    </Container>
  );
}
