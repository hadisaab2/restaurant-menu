import React, { useState } from "react";
import { Container, TabContainer, Tab } from "./styles";
import Branches from "./branches";
import WorkingHours from "./workingHours";
import SocialMedia from "./socialmedia";
import Logo from "./logo";
import QrCode from "./qrcode";
import SliderImages from "./sliderImages";

export default function Settings({ setSection,userInformation }) {
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
          tab={"WorkingHours"}
          activetab={activetab}
          onClick={() => setActivetab("WorkingHours")}
        >
          Working Hours
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
        <Tab
          tab={"QrCode"}
          activetab={activetab}
          onClick={() => setActivetab("QrCode")}
        >
          QrCode
        </Tab>
        <Tab
          tab={"SliderImages"}
          activetab={activetab}
          onClick={() => setActivetab("SliderImages")}
        >
          Slider Images
        </Tab>


      </TabContainer>
      {activetab == "Branches" && <Branches />}
      {activetab == "WorkingHours" && <WorkingHours />}
      {activetab == "SocialMedia" && <SocialMedia />}
      {activetab == "Logo" && <Logo setSection={setSection} />}
      {activetab == "QrCode" && <QrCode userInformation={userInformation} setSection={setSection} />}
      {activetab == "SliderImages" && <SliderImages />}
    </Container>
  );
}
