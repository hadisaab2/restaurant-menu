import React from 'react'
import { Container,Brand ,LanguageContainer, Language, Ball, Wrapper} from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { changelanuage } from '../../../../redux/restaurant/restaurantActions';
import { useParams } from 'react-router-dom';
export default function HeaderTop() {
  const { restaurantName } = useParams();

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const dispatch=useDispatch()
  const handlelanguage = (lang)=>{
    dispatch(changelanuage({name:restaurantName,activeLanguage:lang}))
  }
  return (
    <Container>
      <Brand src={restaurant.logoURL && `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}/>
      {
        restaurant?.languages=="en&ar" &&
      
      <LanguageContainer>
        <Wrapper/>
        <Ball activeLanguage={restaurant.activeLanguage}/>
          <Language activeLanguage={restaurant.activeLanguage} language={"en"} onClick={()=>handlelanguage("en")}>En</Language>
          <Language activeLanguage={restaurant.activeLanguage} language={"ar"}  onClick={()=>handlelanguage("ar")}>Ar</Language>

      </LanguageContainer>
}
    </Container>
  )
}
