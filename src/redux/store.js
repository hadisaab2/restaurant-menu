import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { restaurantReducer } from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";

const CART_PERSIST_TTL_MS = 24 * 60 * 60 * 1000;

/** Drop persisted cart after 24h without updates (uses cart.__cartMeta.updatedAt). */
const cartExpireTransform = createTransform(
  (state) => state,
  (state) => {
    if (!state || typeof state !== "object") return {};
    const updatedAt = state.__cartMeta?.updatedAt;
    if (!updatedAt || Date.now() - updatedAt > CART_PERSIST_TTL_MS) {
      return {};
    }
    return state;
  },
  { whitelist: ["cart"] }
);

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  cart: cartReducer
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [cartExpireTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
