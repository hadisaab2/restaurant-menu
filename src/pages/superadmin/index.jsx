import React from "react";
import { Container, TabsContainer, Tab } from "./styles";
import { useState } from "react";
import Restaurants from "./restaurants";

export default function SuperAdmin() {
  const [activeTab, setActiveTab] = useState("Restaurants");
  return (
    <Container>
      <TabsContainer>
        <Tab
          onClick={() => setActiveTab("Restaurants")}
          activeTab={activeTab}
          tab={"Restaurants"}
        >
          Restaurants
        </Tab>
      </TabsContainer>
      {activeTab == "Restaurants" && <Restaurants />}
    </Container>
  );
}
