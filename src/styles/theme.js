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

// import axios from 'axios';

// // Function that fetches theme data and returns a promise
// export async function fetchAndExportTheme() {
//   if (window.location.pathname.startsWith('/theme1/')) {
//     const restaurantName = window.location.pathname.split('/')[2];
//     try {
//       const response = await axios.get(`http://localhost:4000/restaurants/${restaurantName}`);
//       const restaurant = response.data;
//       return exportTheme(restaurant); // Return the themecolors and breakingPoints
//     } catch (error) {
//       console.error('Error fetching restaurant data:', error);
//       return {}; // Return an empty object or some default value in case of error
//     }
//   }
//   // Return some default value if not within /theme1/
//   return {};
// }

// function exportTheme(restaurant) {
//   const themecolors = restaurant ? JSON.parse(restaurant.theme) : {};
//   const breakingPoints = {
//     sm: 767,
//     md: 991,
//     lg: 992,
//   };

//   return { themecolors, breakingPoints };
// }