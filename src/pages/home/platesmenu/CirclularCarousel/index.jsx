import React, { useState } from "react";
import { Container, Plate,PlateContainer } from "./styles";
import plate from "../../../../static/plate.png";
export default function CirclularCarousel({plates,activeIndex}) {

  return (
    <>
    {/* <button onClick={()=>{setactiveIndex(activeIndex+1)}} style={{position: "absolute",bottom:0}}>front</button>
    <button onClick={()=>{setactiveIndex(activeIndex-1)}}  style={{position: "absolute",bottom:0,left:"100px"}}>back</button> */}

    <Container></Container>
      {plates.map((p,index) => {
        return (
          <PlateContainer index={index} activeIndex={activeIndex}>
            <Plate src={p.image} right={"-150px"} color={p} />
          </PlateContainer>
        );
      })}
    </>
  );
}
