import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Theme1 from "../../pages/theme1";
import { useNavigate, useParams } from "react-router-dom";
import { useGetRestaurant } from "../../apis/restaurants/getRestaurant";
import { addmenu, changelanuage } from "../../redux/restaurant/restaurantActions";
// import Template2 from "../../pages/template2";
import { ThemeProvider } from "styled-components";
import Loading from "./loading";
import Theme2 from "../../pages/theme2";

export default function Template() {
  const dispatch = useDispatch();
  const { restaurantName } = useParams();
  const navigate = useNavigate();
  const { isLoading, response,error } = useGetRestaurant({
    restaurantName: restaurantName,
  });

  useEffect(() => {
    if (error) {
      navigate('/error/notfound');
    }
  }, [error, navigate]);


  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    if (!isLoading && response?.data) {
      dispatch(addmenu(response?.data));
      dispatch(changelanuage({name:restaurantName,activeLanguage:response?.data.languages.replace("&ar","")}))
      // if english or arabic it stays the same
      //if en&ar replace &ar by empty string to become en
    }
  }, [isLoading]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTrue(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []); 
  if (restaurant?.categories && !isLoading && !isTrue) {
    return (
      <ThemeProvider theme={JSON.parse(response.data.theme)}>
        {restaurant?.template_id==1 &&<Theme1/> }
        {restaurant?.template_id==2 &&<Theme2/> }

      </ThemeProvider>
    );
  }else{
      return(<Loading/>)

  }
}
