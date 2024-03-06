import React from 'react'
import { Container ,CategoryContainer,Category,CategoryImage,ArrowContainer,Arrow} from './styles'
import categoryimage from "./categoryimage.png"
export default function Categories({menu,setSelectedCategory,selectedCategory}) {
  return (
    <Container selectedCategory={selectedCategory}>
        {menu.map(({category,categoryimage})=>{
            return(
            <CategoryContainer>
                <Category>{category}</Category>
                <CategoryImage src={categoryimage}/>
                <ArrowContainer onClick={()=>setSelectedCategory(category)}>
                  <Arrow/>
                </ArrowContainer>
            </CategoryContainer>
            )
        })}
    </Container>
  )
}
