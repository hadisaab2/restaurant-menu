import React, { useState } from "react";
import { Container, TabContainer, Tab } from "./styles";
import Branches from "./branches";
import SocialMedia from "./socialmedia";
import Logo from "./logo";

export default function Settings({ setSection }) {
  const [activetab, setActivetab] = useState("Branches");
  return (
    <Container>
      <TabContainer>
        <Tab
          tab={"Branches"}
          activetab={activetab}
          onClick={() => setActivetab("Branches")}
        >
          Branches
        </Tab>
        <Tab
          tab={"SocialMedia"}
          activetab={activetab}
          onClick={() => setActivetab("SocialMedia")}
        >
          SocialMedia
        </Tab>
        <Tab
          tab={"Logo"}
          activetab={activetab}
          onClick={() => setActivetab("Logo")}
        >
          Logo
        </Tab>
      </TabContainer>
      {activetab == "Branches" && <Branches />}
      {activetab == "SocialMedia" && <SocialMedia />}
      {activetab == "Logo" && <Logo setSection={setSection} />}
    </Container>
  );
}
