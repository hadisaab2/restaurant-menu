import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Theme1 from "../../pages/theme1";
import { useParams } from "react-router-dom";
import { useGetRestaurant } from "../../apis/restaurants/getRestaurant";
import { addmenu } from "../../redux/restaurant/restaurantActions";
// import Template2 from "../../pages/template2";
import { ThemeProvider } from "styled-components";

export default function Template() {
  const dispatch = useDispatch();
  const { restaurantName } = useParams();

  const { isLoading, response } = useGetRestaurant({
    onSuccess: () => {},
    restaurantName: restaurantName,
  });

 
  useEffect(() => {
    if (!isLoading) {
      dispatch(addmenu(response?.data));
    }
  }, [isLoading]);

  if (response?.data.template_id === 1) {
    return (
      <ThemeProvider theme={JSON.parse(response.data.theme)}>
        <Theme1 />
      </ThemeProvider>
    );
  }
}
