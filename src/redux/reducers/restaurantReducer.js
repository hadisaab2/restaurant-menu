import { ADD_MENU, ADD_LANGUAGE } from "../actions";

const initialState = {};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU:
      //Adds a Restaurant data to the state as restaurantname:{restaurant data}
      // Normalize IsValid to is_valid for consistency
      const normalizedPayload = { ...action.payload };
      if (normalizedPayload.IsValid !== undefined && normalizedPayload.is_valid === undefined) {
        normalizedPayload.is_valid = normalizedPayload.IsValid;
      }
      return { ...state, [action.payload.name]: normalizedPayload };
    case ADD_LANGUAGE:
     // add the restaurant active language to the restaurantname :{activelanguage:...,rest of data} and is used also to change language if restaurant is en/ar 
      return {
        ...state,
        [action.payload.name]: {
          ...state?.[action.payload.name],
          activeLanguage: action.payload.activeLanguage,
        },
      };
    default:
      return state;
  }
};
