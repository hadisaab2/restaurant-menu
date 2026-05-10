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
      </TabsContainer>

      <ContentArea>
        {activeTab === "Restaurants" && <Restaurants />}
      </ContentArea>
    </Container>
  );
}
