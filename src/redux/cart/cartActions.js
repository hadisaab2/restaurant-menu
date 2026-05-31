import { isV2Selection, normalizeV2Selection } from "../../product-options/schema";

// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADJUST_QUANTITY = 'ADJUST_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

const hashFormData = (formData) => {
  return JSON.stringify(formData)
    .split('')
    .reduce((hash, char) => {
      const charCode = char.charCodeAt(0);
      hash = ((hash << 5) - hash) + charCode;
      return hash & hash; // Convert to 32bit integer
    }, 0);
};
// Action Creators
export const addToCart = (restaurantName, itemDetails, quantity, formData, price, instruction, menuMode) => {
  let normalizedForm = formData;
  if (isV2Selection(formData)) {
    normalizedForm = normalizeV2Selection({
      sizeId: formData.sizeId ?? null,
      addonIds: formData.addonIds || [],
      removalIds: formData.removalIds || [],
    });
  }
  const modeKey = menuMode || 'both';
  const uniqueId = `${itemDetails.id}_${modeKey}_${hashFormData(normalizedForm)}`;
  console.log(itemDetails)
  return {
    type: ADD_TO_CART,
    payload: {
      restaurantName,
      item: {
        ...itemDetails,
        quantity,
        formData: normalizedForm,
        uniqueId,
        price,
        instruction,
        menuMode: modeKey
      }
    }
  };
};

export const removeFromCart = (restaurantName, uniqueId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { 
      restaurantName, 
      uniqueId 
    }
  };
};

export const adjustQuantity = (restaurantName, uniqueId, quantity) => {
  return {
    type: ADJUST_QUANTITY,
    payload: { 
      restaurantName, 
      uniqueId, 
      quantity 
    }
  };
};

export const clearCart = (restaurantName) => {
  return {
    type: CLEAR_CART,
    payload: { 
      restaurantName 
    }
  };
};
