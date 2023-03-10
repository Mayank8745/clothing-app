import { cartActionTypes } from "./cart-action-types";

export const toogleCartDrop = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
