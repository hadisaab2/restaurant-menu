import { restaurantmenus } from "../data";
const restaurantName = window.location.pathname.split('/')[2];
const restaurant = restaurantmenus.find(
  restaurant => restaurant.name === restaurantName
);

export const themecolors=restaurant?restaurant.theme:{}

export const breakingPoints = {
  sm: 767,
  md: 991,
  lg: 992,
};