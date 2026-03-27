const keyFor = (restaurantName) =>
  `menugic_customer_token_${restaurantName || "default"}`;

export const getCustomerAccessToken = (restaurantName) => {
  try {
    return localStorage.getItem(keyFor(restaurantName)) || "";
  } catch {
    return "";
  }
};

export const setCustomerAccessToken = (restaurantName, token) => {
  try {
    if (token) {
      localStorage.setItem(keyFor(restaurantName), token);
    } else {
      localStorage.removeItem(keyFor(restaurantName));
    }
  } catch {
    /* ignore */
  }
};

export const clearCustomerAccessToken = (restaurantName) => {
  setCustomerAccessToken(restaurantName, null);
};
