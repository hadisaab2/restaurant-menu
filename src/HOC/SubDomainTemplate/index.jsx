import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Theme1 from "../../pages/theme1";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetRestaurant } from "../../apis/restaurants/getRestaurant";
import { addmenu, changelanuage } from "../../redux/restaurant/restaurantActions";
// import Template2 from "../../pages/template2";
import { ThemeProvider } from "styled-components";
import Loading from "./loading";
import Theme2 from "../../pages/theme2";

export default function SubDomainTemplate({restaurantName}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, response,error } = useGetRestaurant({
    restaurantName: restaurantName,
  });

  useEffect(() => {
    if (error) {
      navigate('/error/notfound');
    }
  }, [error, navigate]);

  // useEffect(() => {
  //   previousLocation.current = location;
  // }, [location]);

  // useEffect(() => {
  //   const unlisten = history.listen((newLocation) => {
  //     // Check if the route has changed
  //     if (previousLocation.current?.pathname !== newLocation.pathname) {
  //       dispatch({ type: 'CLEAR_STATE' }); // Dispatch action to clear Redux state
  //     }
  //   });

  //   return () => {
  //     unlisten();
  //   };
  // }, [dispatch]);


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
