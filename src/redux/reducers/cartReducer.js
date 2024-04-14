import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  CLEAR_CART,
} from "../cart/cartActions";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if item is already in cart
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // Item already exists in cart, update quantity by adding the new quantity to the existing one
        return state.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity, // Add the passed quantity
            };
          }
          return item;
        });
      } else {
        // Item not in cart, add new item with the provided quantity (not defaulting to 1)
        return [...state, action.payload]; // Use payload directly, assuming it includes the correct quantity
      }

    case REMOVE_FROM_CART:
      // Remove item from cart by filtering it out
      return state.filter((item) => item.id !== action.payload.id);

    case ADJUST_QUANTITY:
      // Adjust the quantity of a specific item in the cart
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });

    case CLEAR_CART:
      // Clear the cart completely
      return [];

    default:
      return state;
  }
};

export default cartReducer;
