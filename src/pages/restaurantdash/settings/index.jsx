import React, { useState } from "react";
import {
  Container, 
  TabContainer,
  Tab
} from "./styles";
import Branches from "./branches";
import SocialMedia from "./socialmedia";


export default function Settings() {
  const[activetab,setActivetab]=useState("Branches")
  return (
    <Container>
        <TabContainer>
            <Tab tab={"Branches"} activetab={activetab} onClick={()=>setActivetab("Branches")}>Branches</Tab>
            <Tab tab={"SocialMedia"} activetab={activetab} onClick={()=>setActivetab("SocialMedia")}>SocialMedia</Tab>
        </TabContainer>
        {activetab=="Branches" && <Branches/>}
        {activetab=="SocialMedia" && <SocialMedia/>}

        
    </Container>
  );
}
