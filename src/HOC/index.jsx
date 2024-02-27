import React from "react";
import { DetailsBtn, Location, PageLayout,SwipeDownContainer,Line,Arrow } from "./styles";
import { useState } from "react";
import Popup from "./popup";

export default function HOC(WrappedComponent) {
  const [showPopup,setshowPopup] =useState(false)
  const popupHandler = (show)=>{
    setshowPopup(show)
  }

  return (
    <PageLayout>
      <WrappedComponent showPopup={showPopup}  />
      <DetailsBtn onClick={()=>popupHandler(true)}>
        <Location/>
      </DetailsBtn>
      <Popup showPopup={showPopup} popupHandler={popupHandler}/>
      {/* <SwipeDownContainer>
        <Arrow/>
      </SwipeDownContainer> */}
    </PageLayout>
  );
}
