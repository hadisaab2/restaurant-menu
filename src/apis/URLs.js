const { REACT_APP_BASE_URL } = process.env;

export const SIGNIN_URL = `${REACT_APP_BASE_URL}/auth/signin`;
export const VALIDATE_TOKEN_URL = `${REACT_APP_BASE_URL}/auth/validateToken`;

export const ADD_PRODUCT_URL = `${REACT_APP_BASE_URL}/products`;
export const GET_PRODUCT_URL = `${REACT_APP_BASE_URL}/products`;
