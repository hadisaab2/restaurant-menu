import React from 'react'
import { Container ,PlatesContainer,PlateName,PlateImaage,ArrowContainer,Arrow} from './styles'
export default function Plates({categoryname,plates,selectedCategory,setSelectedCategory}) {
  return (
    <Container categoryname={categoryname} selectedCategory={selectedCategory}>
        {plates.map(({nametop,namebottom,image})=>{
            return(
            <PlatesContainer>
                <PlateName>{nametop} {namebottom}</PlateName>
                <PlateImaage src={image}/>
                <ArrowContainer  onClick={()=>setSelectedCategory(null)}>
                  <Arrow/>
                </ArrowContainer>
            </PlatesContainer>
            )
        })}
    </Container>
  )
}
