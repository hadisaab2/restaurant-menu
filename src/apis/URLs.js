const { REACT_APP_BASE_URL } = process.env;

export const SIGNIN_URL = `${REACT_APP_BASE_URL}/auth/signin`;
export const VALIDATE_TOKEN_URL = `${REACT_APP_BASE_URL}/auth/validateToken`;

export const ADD_PRODUCT_URL = `${REACT_APP_BASE_URL}/products`;
export const GET_PRODUCT_URL = (id) =>
  `${REACT_APP_BASE_URL}/products?restaurantId=${id}`;
export const EDIT_PRODUCT_URL = (id) => `${REACT_APP_BASE_URL}/products/${id}`;
export const DELETE_PRODUCT_URL = (id) =>
  `${REACT_APP_BASE_URL}/products/${id}`;

  export const GET_PRODUCTS_URL = (categoryId,page) =>
  `${REACT_APP_BASE_URL}/products?categoryId=${categoryId}&page=${page}`;


export const ADD_CATEGORY_URL = `${REACT_APP_BASE_URL}/categories`;
export const GET_CATEGORIES_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/categories?restaurantId=${restaurantId}`;
export const EDIT_CATEGORY_URL = (id) =>
  `${REACT_APP_BASE_URL}/categories/${id}`;
export const DELETE_CATEGORY_URL = (id) =>
  `${REACT_APP_BASE_URL}/categories/${id}`;

export const ADD_RESTAURANT_URL = `${REACT_APP_BASE_URL}/restaurants`;
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

export const ADD_MEDIA_URL = `${REACT_APP_BASE_URL}/media`;
export const GET_MEDIA_URL = (restaurantId) =>
  `${REACT_APP_BASE_URL}/media?restaurantId=${restaurantId}`;
export const EDIT_MEDIA_URL = (id) => `${REACT_APP_BASE_URL}/media/${id}`;
export const DELETE_MEDIA_URL = (id) => `${REACT_APP_BASE_URL}/media/${id}`;
