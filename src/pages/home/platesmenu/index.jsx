import React, { useState } from 'react'
import { Container } from './styles'
import CirclularCarousel from './CirclularCarousel'
import LinearCarousel from './LinearCarousel'
import PlateName from './PlateName';
import plate from "./plate.png";
import plate2 from "./plate2.png";
import plate3 from "./plate4.png";
import plate4 from "./plate3.png";

export default function PlatesMenu() {
    const plates = [
      {name:"LAMB STEAK POTATO",image:plate},
      {name:"LAMB STEAK POTATO",image:plate2},
      {name:"LAMB STEAK POTATO",image:plate3},
      {name:"LAMB STEAK POTATO",image:plate4},
      {name:"LAMB STEAK POTATO",image:plate2},
      {name:"LAMB STEAK POTATO",image:plate3},
      {name:"LAMB STEAK POTATO",image:plate4},
      {name:"LAMB STEAK POTATO",image:plate2},
      ];
      const [activeIndex,setactiveIndex]=useState(0)
  return (
    <Container>
        <CirclularCarousel plates={plates} activeIndex={activeIndex} />
        <PlateName/>
        <LinearCarousel plates={plates} activeIndex={activeIndex} setactiveIndex={setactiveIndex}/>
    </Container>
  )
}
