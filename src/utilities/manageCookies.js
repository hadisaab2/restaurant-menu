import Cookies from "js-cookie";

export const setCookie = (key, value) => {
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  Cookies.set(key, value, { expires: oneYearFromNow });
};

export const getCookie = (key) => Cookies.get(key);

export const deleteCookie = () => Cookies.remove("accessToken");
