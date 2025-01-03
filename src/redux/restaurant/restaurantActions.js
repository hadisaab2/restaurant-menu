import { ADD_MENU ,ADD_LANGUAGE} from "../actions";

export const addmenu = (payload) => ({
  type: ADD_MENU,
  payload,
});

export const changelanuage = (payload) => ({
  type: ADD_LANGUAGE,
  payload,
});
