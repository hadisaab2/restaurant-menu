import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Theme1 from "../../pages/theme1";
import { useNavigate } from "react-router-dom";
import { useGetRestaurant } from "../../apis/restaurants/getRestaurant";
import {
  addmenu,
  changelanuage,
} from "../../redux/restaurant/restaurantActions";
import { ThemeProvider } from "styled-components";
import Loading from "./loading";
import Theme2 from "../../pages/theme2";

export default function SubDomainTemplate({ restaurantName }) {
  const dispatch = useDispatch();
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
          activeLanguage: response?.data.languages.replace("&ar", ""),
        })
      );
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
      <ThemeProvider
        theme={{
          ...JSON.parse(response.data.theme),
          font: response.data.font,
        }}
      >
        {restaurant?.template_id == 1 && <Theme1 />}
        {restaurant?.template_id == 2 && <Theme2 />}
      </ThemeProvider>
    );
  } else {
    return <Loading />;
  }
}
