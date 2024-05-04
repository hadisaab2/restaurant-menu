// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADJUST_QUANTITY = 'ADJUST_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

// // Action Creators
// export const addToCart = (item, quantity) => {
//     return {
//         type: ADD_TO_CART,
//         payload: {
//             ...item,
//             quantity: quantity  // ensure quantity is included and can be adjusted
//         }
//     };
// };

// export const removeFromCart = (itemId) => {
//     return {
//         type: REMOVE_FROM_CART,
//         payload: {
//             id: itemId
//         }
//     };
// };

// export const adjustQuantity = (itemId, quantity) => {
//     return {
//         type: ADJUST_QUANTITY,
//         payload: {
//             id: itemId,
//             quantity: quantity
//         }
//     };
// };

// export const clearCart = () => {
//     return {
//         type: CLEAR_CART
//     };
// };




export const addToCart = (restaurantName, itemDetails, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      restaurantName,
      item: {
        ...itemDetails,
        quantity
      }
    }
  };
};
  
  export const removeFromCart = (restaurantName, id) => {
    return {
      type: REMOVE_FROM_CART,
      payload: { restaurantName, id }
    };
  };
  
  export const adjustQuantity = (restaurantName, itemId, quantity) => {
    return {
      type: ADJUST_QUANTITY,
      payload: { 
        restaurantName, 
        itemId, 
        quantity 
      }
    };
  };
  
  export const clearCart = (restaurantName) => {
    return {
      type: CLEAR_CART,
      payload: { restaurantName }
    };
  };