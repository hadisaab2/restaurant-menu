import { ADD_MENU } from "../actions";

const initialState = [];

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU:
      return action.payload;
    default:
      return state;
  }
};
