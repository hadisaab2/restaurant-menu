import React, { useState,useEffect } from "react";
import {
  Container,
  LogoContainer,
  Letter,
  LetterAnimated
} from "./styles";
import T from "./T.png"
import I from "./I.png"
import G from "./G.png"
import E from "./E.png"
import R from "./R.png"
import S from "./S.png"
const letters=[T,I,G,E,R,S]

export default function Logo() {
  const[animationIndex,setanimationIndex]=useState(null)


  useEffect(() => {
    const intervalId = setInterval(() => {
        setanimationIndex(Math.floor(Math.random() * ((letters.length-1) - 0 + 1)) + 0)
    }, 2000); 
    return () => clearInterval(intervalId);
  }, []);

    return (
    <Container>
      <LogoContainer>
        {letters.map((letter,index)=>{
          return (
            <Letter src={letter} />
          
          
          )
        })}
      </LogoContainer>
    </Container>
  );
}
