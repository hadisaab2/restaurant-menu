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
      </TabsContainer>

      <ContentArea>
        {activeTab === "Restaurants" && <Restaurants />}
        {activeTab === "Analytics" && <Analytics />}
      </ContentArea>
    </Container>
  );
}
