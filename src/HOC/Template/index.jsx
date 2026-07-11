import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetRestaurant } from "../../apis/restaurants/getRestaurant";
import {
  addmenu,
  changelanuage,
} from "../../redux/restaurant/restaurantActions";
import { ThemeProvider } from "styled-components";
import Loading from "./loading";
import { initRestaurantPixel } from "../../utilities/analytics/metaPixel";

// Lazy load themes — only the one needed for this restaurant will be downloaded
const Theme1 = lazy(() => import("../../pages/theme1"));
const Theme2 = lazy(() => import("../../pages/theme2"));
const Theme3 = lazy(() => import("../../pages/theme3"));
const Theme4 = lazy(() => import("../../pages/theme4"));
const Theme5 = lazy(() => import("../../pages/theme5"));
const Theme6 = lazy(() => import("../../pages/theme6"));
const Theme7 = lazy(() => import("../../pages/theme7"));
const Theme8 = lazy(() => import("../../pages/theme8"));
const Theme3NotSubscribed = lazy(() => import("../../pages/theme3/NotSubscribed"));



// Tiny component inside Suspense — only renders after lazy chunk loads
function ThemeLoaded({ onReady }) {
  useEffect(() => { onReady(); }, []);
  return null;
}

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
  const [themeReady, setThemeReady] = useState(false);

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

      // Initialize restaurant-specific Meta Pixel if configured
      if (response.data.meta_pixel_id) {
        initRestaurantPixel(response.data.meta_pixel_id);
      }
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
  if (isValid === false || isValid === 0) {
    if (response?.data) {
      return (
        <ThemeProvider
          theme={{
            ...JSON.parse(response.data.theme || '{}'),
            font: response.data.font,
          }}
        >
          <Suspense fallback={null}>
            <Theme3NotSubscribed restaurant={response.data} />
          </Suspense>
        </ThemeProvider>
      );
    }
    return null;
  }

 const dataReady = restaurant?.categories && !isLoading && !isTrue;

 return (
     <>
       {dataReady && <ThemeProvider
         theme={{
           ...JSON.parse(response.data.theme),
           font: response.data.font,
         }}
       >
        <Suspense fallback={null}>
          <ThemeLoaded onReady={() => setThemeReady(true)} />
          {restaurant?.template_id == 1 && <Theme1 />}
          {restaurant?.template_id == 2 && <Theme2 />}
          {restaurant?.template_id == 3 && <Theme3 />}
          {restaurant?.template_id == 4 && <Theme4 />}
          {restaurant?.template_id == 5 && <Theme5 />}
          {restaurant?.template_id == 6 && <Theme6 />}
          {restaurant?.template_id == 7 && <Theme7 />}
          {restaurant?.template_id == 8 && <Theme8 />}
        </Suspense>
       </ThemeProvider>
       }
       <Loading restaurantName={restaurantName} viewLoading={dataReady && themeReady} />
     </>
   );
   
}
