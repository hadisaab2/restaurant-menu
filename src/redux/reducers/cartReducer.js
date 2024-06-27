import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  CLEAR_CART,
} from "../cart/cartActions";

const initialState = {};

// Helper function to check if two formData objects are equal
const isEqualFormData = (formData1, formData2) => {
  return JSON.stringify(formData1) === JSON.stringify(formData2);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { restaurantName, item } = action.payload;
      const restaurantCart = state[restaurantName] || [];
      const itemIndex = restaurantCart.findIndex(cartItem => 
        cartItem.id === item.id && isEqualFormData(cartItem.formData, item.formData)
      );

      if (itemIndex >= 0) {
        // Item with the same formData already exists in the restaurant cart, update quantity
        const newCart = restaurantCart.map((cartItem, index) => {
          if (index === itemIndex) {
            return { 
              ...cartItem, 
              quantity: cartItem.quantity + item.quantity
            };
          }
          return cartItem;
        });
        return { ...state, [restaurantName]: newCart };
      } else {
        // Item not in the cart or formData differs, add new item
        return { ...state, [restaurantName]: [...restaurantCart, item] };
      }
    }

    case REMOVE_FROM_CART: {
      const { restaurantName, uniqueId } = action.payload;
      const restaurantCart = state[restaurantName] || [];
      const newCart = restaurantCart.filter(cartItem => cartItem.uniqueId !== uniqueId);
      return { ...state, [restaurantName]: newCart };
    }

    case ADJUST_QUANTITY: {
      const { restaurantName, uniqueId, quantity } = action.payload;
      const restaurantCart = state[restaurantName] || [];
      
      return {
        ...state,
        [restaurantName]: restaurantCart.map(item => 
          item.uniqueId === uniqueId ? { ...item, quantity: quantity } : item
        )
      };
    }

    case CLEAR_CART: {
      const { restaurantName } = action.payload;
      return { ...state, [restaurantName]: [] };
    }

    default:
      return state;
  }
};

export default cartReducer;
