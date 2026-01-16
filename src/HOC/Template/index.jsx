import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Theme1 from "../../pages/theme1";
import { useNavigate, useParams } from "react-router-dom";
import { useGetRestaurant } from "../../apis/restaurants/getRestaurant";
import {
  addmenu,
  changelanuage,
} from "../../redux/restaurant/restaurantActions";
import { ThemeProvider } from "styled-components";
import Loading from "./loading";
import Theme2 from "../../pages/theme2";
import Theme3 from "../../pages/theme3";
import Theme4 from "../../pages/theme4";
import Theme3NotSubscribed from "../../pages/theme3/NotSubscribed";



export default function Template() {
  const dispatch = useDispatch();
  const { restaurantName } = useParams();
  const navigate = useNavigate();
  const { isLoading, response, error } = useGetRestaurant({
    restaurantName: restaurantName,
  });

  useEffect(() => {
    if (error) {
      navigate("/error/notfound");
    }
  }, [error, navigate]);

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const [isTrue, setIsTrue] = useState(true);

  // Check if restaurant is valid (subscribed/activated)
  useEffect(() => {
    // Always prioritize response data if available
    if (!isLoading && response?.data) {
      // Check response data directly (supports both is_valid and IsValid)
      const responseIsValid = response.data.is_valid !== undefined 
        ? response.data.is_valid 
        : (response.data.IsValid !== undefined ? response.data.IsValid : true);
      
      console.log('Template - Checking validity:', {
        'response.data.is_valid': response.data.is_valid,
        'response.data.IsValid': response.data.IsValid,
        'responseIsValid': responseIsValid
      });
      
      // Only redirect if explicitly false and not theme3
      if ((responseIsValid === false || responseIsValid === 0) && response.data.template_id !== 3) {
        console.log('Template - Redirecting to notsubscribed');
        navigate("/notsubscribed");
      }
    }
    // Don't check Redux state - only use response data to avoid stale data issues
  }, [isLoading, response, navigate]);




  useEffect(() => {
    if (!isLoading && response?.data) {
      dispatch(addmenu(response?.data));
      document.title = response.data.name;
      // document.body.style.fontFamily = `"${response.data.font}", "Noto Kufi Arabic"`;
        let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = `https://storage.googleapis.com/ecommerce-bucket-testing/${response.data.logoURL}`;

      dispatch(
        changelanuage({
          name: restaurantName,
          activeLanguage: response?.data.default_language || response?.data.languages.replace("&ar", "") || "en",
        })
      );
      // Use default_language if available, otherwise fallback to old logic
    }
  }, [isLoading]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTrue(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  // Don't render if restaurant is not valid
  // Only check response data to avoid stale Redux data
  const getIsValid = () => {
    if (!isLoading && response?.data) {
      const isValid = response.data.is_valid !== undefined 
        ? response.data.is_valid 
        : (response.data.IsValid !== undefined ? response.data.IsValid : true);
      return isValid;
    }
    // If still loading, don't block rendering
    return true;
  };
  
  const isValid = getIsValid();
  const isTheme3NotSubscribed =
    (isValid === false || isValid === 0) && response?.data?.template_id === 3;
  if (isTheme3NotSubscribed && response?.data) {
    return (
      <ThemeProvider
        theme={{
          ...JSON.parse(response.data.theme),
          font: response.data.font,
        }}
      >
        <Theme3NotSubscribed restaurant={response.data} />
      </ThemeProvider>
    );
  }
  if (isValid === false || isValid === 0) {
    return null;
  }

 return (
     <>
       {(restaurant?.categories && !isLoading && !isTrue) && <ThemeProvider
         theme={{
           ...JSON.parse(response.data.theme),
           font: response.data.font,
         }}
       >
        {restaurant?.template_id == 1 && <Theme1 />}
        {restaurant?.template_id == 2 && <Theme2 />}
        {restaurant?.template_id == 3 && <Theme3 />}
        {restaurant?.template_id == 4 && <Theme4 />}
       </ThemeProvider>
       }
       <Loading restaurantName={restaurantName} viewLoading={restaurant?.categories && !isLoading && !isTrue} />
     </>
   );
   
}
