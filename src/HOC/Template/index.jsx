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
import { Helmet } from "react-helmet";
import Favicon from "react-favicon";


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
// ✅ Update favicon dynamically
const updateFavicon = (url) => {
  let existingFavicon = document.querySelector("link[rel='icon']");
  
  if (existingFavicon) {
      // ✅ Remove the existing favicon to force a fresh load
      existingFavicon.remove();
  }

  // ✅ Create a new favicon tag
  const newFavicon = document.createElement("link");
  newFavicon.rel = "icon";
  newFavicon.href = url + `?v=${new Date().getTime()}`; // Append timestamp to prevent caching
  document.head.appendChild(newFavicon);
};


const updateMetaTags = (faviconUrl, title) => {
  const metaTags = [
      { property: "og:image", content: faviconUrl },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:title", content: title }  // Updating title dynamically
  ];

  metaTags.forEach(({ property, content }) => {
      let metaTag = document.querySelector(`meta[property='${property}']`);
      if (!metaTag) {
          metaTag = document.createElement("meta");
          metaTag.setAttribute("property", property);
          document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
  });
};


  useEffect(() => {
    if (!isLoading && response?.data) {
      dispatch(addmenu(response?.data));
      document.title = response.data.name;

    //   let link = document.querySelector("link[rel~='icon']");
    // if (!link) {
    //   link = document.createElement('link');
    //   link.rel = 'icon';
    //   document.getElementsByTagName('head')[0].appendChild(link);
    // }
    // link.href = `https://storage.googleapis.com/ecommerce-bucket-testing/${response.data.logoURL}`;
    updateMetaTags(`https://storage.googleapis.com/ecommerce-bucket-testing/${response.data.logoURL}`,response?.data?.name)
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
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  if (restaurant?.categories && !isLoading && !isTrue) {
    return (<>
      <Helmet>
      <title>{response.data.name}</title>

      {/* ✅ Open Graph Tags (WhatsApp, Facebook, Twitter) */}
      <meta property="og:title" content={response.data.name} />
      <meta property="og:description" content={`Check out ${response.data.name}'s menu!`} />
      <meta property="og:image" content={`https://storage.googleapis.com/ecommerce-bucket-testing/${response.data.logoURL}`} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />

      {/* ✅ Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={response.data.name} />
      <meta name="twitter:description" content={`Explore the best dishes at ${response.data.name}!`} />
      <meta name="twitter:image" content={`https://storage.googleapis.com/ecommerce-bucket-testing/${response.data.logoURL}`} />
    </Helmet>
    <Favicon url={`https://storage.googleapis.com/ecommerce-bucket-testing/${response.data.logoURL}`} />

      <ThemeProvider
        theme={{
          ...JSON.parse(response.data.theme),
          font: response.data.font,
        }}
      >
        {restaurant?.template_id == 1 && <Theme1 />}
        {restaurant?.template_id == 2 && <Theme2 />}
      </ThemeProvider>
      </>

    );
  } else {
    return <Loading />;
  }
}
