import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import { STOCK } from "../utils/constants";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, amount, product } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            // or cartItem.id === tempItem.id
            let newAmount = cartItem.amount + amount;
            if (amount > cartItem.max) newAmount = cartItem.max;

            return { ...cartItem, amount: newAmount };
          } else return cartItem;
        });

        return { ...state, cart: tempCart };
      } else {
        const { name, price, images } = product;
        const newItem = {
          id: id,
          name,
          price,
          max: STOCK,
          image: images[0].formats.thumbnail.url,
          amount,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }

    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };

    case CLEAR_CART:
      return { ...state, cart: [] };

    case TOGGLE_CART_ITEM_AMOUNT:
      const { id: ID, value } = action.payload;

      const temp_cart = state.cart.map((item) => {
        if (item.id === ID) {
          if (value === "inc") {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) newAmount = item.max;
            return { ...item, amount: newAmount };
          } else if (value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) newAmount = 1;
            return { ...item, amount: newAmount };
          }
        } else return item;

        return null;
      });
      return { ...state, cart: temp_cart };

    case COUNT_CART_TOTALS:
      let { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;

          total.total_amount += amount;
          total.total_items += price * amount;

          return total;
        },
        { total_items: 0, total_amount: 0 }
      );
      return { ...state, total_items, total_amount };

    default:
      break;
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
