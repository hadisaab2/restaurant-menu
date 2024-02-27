import React from 'react'
import { Container, OfferContainer,OfferImage, Price, Title, TitleContainer,Details } from './styles'

export default function Offers({offers}) {
  return (
    <Container>
        
        {offers.items.map((offer,index)=>{
            return(
                <OfferContainer index={index}>
                    <OfferImage src={offer.image}/>
                    <TitleContainer index={index}>
                        <Title>{offer.nametop} {offer.namebottom}</Title>
                        <Price>{offer.price}$</Price>
                        <Details>{offer.description}</Details>
                    </TitleContainer>
                </OfferContainer>
            )
        })}

    </Container>
  )
}
