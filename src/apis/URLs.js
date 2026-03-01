const { REACT_APP_BASE_URL } = process.env;

// Log the base URL to verify it's set correctly
console.log("🌐 REACT_APP_BASE_URL:", REACT_APP_BASE_URL);
if (!REACT_APP_BASE_URL) {
  console.warn("⚠️  WARNING: REACT_APP_BASE_URL is not set! API calls will fail!");
  console.warn("   Create a .env file in restaurant-menu directory with:");
  console.warn("   REACT_APP_BASE_URL=https://77.37.51.25");
}

export const SIGNIN_URL = `${REACT_APP_BASE_URL}/auth/signin`;
export const VALIDATE_TOKEN_URL = `${REACT_APP_BASE_URL}/auth/validateToken`;

export const ADD_PRODUCT_URL = `${REACT_APP_BASE_URL}/products`;
export const GET_PRODUCT_URL = (id) =>
  `${REACT_APP_BASE_URL}/products?restaurantId=${id}`;
export const GET_ONEPRODUCT_URL = (id) =>
  `${REACT_APP_BASE_URL}/products/${id}`;
export const LOG_PRODUCT_URL = (id) =>
  `${REACT_APP_BASE_URL}/products/logs/${id}`;
export const EDIT_PRODUCT_URL = (id) => `${REACT_APP_BASE_URL}/products/${id}`;
export const DELETE_PRODUCT_URL = (id) =>
  `${REACT_APP_BASE_URL}/products/${id}`;

  export const GET_PRODUCTS_URL = (categoryId,page) =>
  `${REACT_APP_BASE_URL}/products?categoryId=${categoryId}&page=${page}`;

export const GET_PRODUCTS_BY_RESTAURANT_URL = (restaurantId, page) =>
  `${REACT_APP_BASE_URL}/products?restaurantId=${restaurantId}&page=${page}`;

export const GET_FEATURED_PRODUCTS_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/products/featured?restaurantId=${restaurantId}`;


export const ADD_CATEGORY_URL = `${REACT_APP_BASE_URL}/categories`;
export const GET_CATEGORIES_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/categories?restaurantId=${restaurantId}`;
export const EDIT_CATEGORY_URL = (id) =>
  `${REACT_APP_BASE_URL}/categories/${id}`;
export const DELETE_CATEGORY_URL = (id) =>
  `${REACT_APP_BASE_URL}/categories/${id}`;
export const LOG_CATEGORY_URL = (id) =>
  `${REACT_APP_BASE_URL}/categories/logs/${id}`;


export const ADD_RESTAURANT_URL = `${REACT_APP_BASE_URL}/restaurants`;
export const ADD_ORDER_URL = `${REACT_APP_BASE_URL}/restaurants/order`;
export const ADD_RESTAURANT_COVER_URL = `${REACT_APP_BASE_URL}/restaurants/addcover`;
export const EDIT_RESTAURANT_COVER_URL = `${REACT_APP_BASE_URL}/restaurants/editcover`;
export const ADD_HOMEPAGE_COVER_URL = `${REACT_APP_BASE_URL}/restaurants/addhomepagecover`;
export const EDIT_HOMEPAGE_COVER_URL = `${REACT_APP_BASE_URL}/restaurants/edithomepagecover`;


export const GET_RESTAURANTS_URL = `${REACT_APP_BASE_URL}/restaurants`;
export const GET_RESTAURANT_URL = (restaurantname) =>
  `${REACT_APP_BASE_URL}/restaurants/${restaurantname}`;
export const EDIT_RESTAURANT_URL = (id) =>
  `${REACT_APP_BASE_URL}/restaurants/${id}`;
export const EDIT_OR_ADD_RESTAURANT_LOGO_URL = (id) =>
  `${REACT_APP_BASE_URL}/restaurants/logo/${id}`;
export const DELETE_RESTAURANT_URL = (id) =>
  `${REACT_APP_BASE_URL}/restaurants/${id}`;
export const GET_RESTAURANT_LOGO_URL = (name) =>
  `${REACT_APP_BASE_URL}/restaurants/${name}?onlyLogo=true`;

export const ADD_BRANCH_URL = `${REACT_APP_BASE_URL}/branches`;
export const GET_BRANCHES_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/branches?restaurantId=${restaurantId}`;
export const EDIT_BRANCH_URL = (id) => `${REACT_APP_BASE_URL}/branches/${id}`;
export const DELETE_BRANCH_URL = (id) => `${REACT_APP_BASE_URL}/branches/${id}`;
export const GET_BRANCH_URL = (id) => `${REACT_APP_BASE_URL}/branches/${id}`;

export const ADD_MEDIA_URL = `${REACT_APP_BASE_URL}/media`;
export const GET_MEDIA_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/media?restaurantId=${restaurantId}`;
export const EDIT_MEDIA_URL = (id) => `${REACT_APP_BASE_URL}/media/${id}`;
export const DELETE_MEDIA_URL = (id) => `${REACT_APP_BASE_URL}/media/${id}`;

export const ADD_SLIDER_IMAGE_URL = `${REACT_APP_BASE_URL}/slider-images`;
export const GET_SLIDER_IMAGES_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/slider-images/${restaurantId}`;
export const EDIT_SLIDER_IMAGE_URL = (id) => `${REACT_APP_BASE_URL}/slider-images/${id}`;
export const DELETE_SLIDER_IMAGE_URL = (id) => `${REACT_APP_BASE_URL}/slider-images/${id}`;

export const GET_BADGES_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/badges/${restaurantId}`;
export const ADD_BADGE_URL = `${REACT_APP_BASE_URL}/badges`;
export const EDIT_BADGE_URL = (id) => `${REACT_APP_BASE_URL}/badges/${id}`;
export const DELETE_BADGE_URL = (id) => `${REACT_APP_BASE_URL}/badges/${id}`;

export const GET_VALUE_CARDS_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/value-cards/${restaurantId}`;
export const ADD_VALUE_CARD_URL = `${REACT_APP_BASE_URL}/value-cards`;
export const EDIT_VALUE_CARD_URL = (id) => `${REACT_APP_BASE_URL}/value-cards/${id}`;
export const UPDATE_VALUE_CARDS_SECTION_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/value-cards/section/${restaurantId}`;
export const DELETE_VALUE_CARD_URL = (id) => `${REACT_APP_BASE_URL}/value-cards/${id}`;

export const GET_WORKING_HOURS_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/working-hours?restaurantId=${restaurantId}`;
export const ADD_WORKING_HOURS_URL = `${REACT_APP_BASE_URL}/working-hours`;
export const EDIT_WORKING_HOURS_URL = (id) =>
  `${REACT_APP_BASE_URL}/working-hours/${id}`;
export const DELETE_WORKING_HOURS_URL = (id) =>
  `${REACT_APP_BASE_URL}/working-hours/${id}`;

export const GET_STATS_SECTION_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/stats-section/${restaurantId}`;
export const UPDATE_STATS_SECTION_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/stats-section/${restaurantId}`;
export const ADD_STAT_ITEM_URL = `${REACT_APP_BASE_URL}/stats-section/items`;
export const EDIT_STAT_ITEM_URL = (id) =>
  `${REACT_APP_BASE_URL}/stats-section/items/${id}`;
export const DELETE_STAT_ITEM_URL = (id) =>
  `${REACT_APP_BASE_URL}/stats-section/items/${id}`;

export const THREADS_ADMIN_URL = `${REACT_APP_BASE_URL}/threads/admin`;
export const THREADS_ADMIN_STATS_URL = `${REACT_APP_BASE_URL}/threads/admin/stats`;
export const THREAD_ADMIN_URL = (id) => `${REACT_APP_BASE_URL}/threads/admin/${id}`;
export const THREAD_ADMIN_REPLY_URL = (id) =>
  `${REACT_APP_BASE_URL}/threads/admin/${id}/reply`;
export const THREAD_ADMIN_STATUS_URL = (id) =>
  `${REACT_APP_BASE_URL}/threads/admin/${id}/status`;
export const THREADS_PUBLIC_URL = `${REACT_APP_BASE_URL}/threads`;

export const GET_FEEDBACKS_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/feedback/${restaurantId}`;