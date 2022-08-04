const STATE = {
  carts: [],
};

export const cartReducer = (state = STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "DEL_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "DEC_CART":
      const indIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[indIndex].qnty >= 1) {
        const delItem = (state.carts[indIndex].qnty -= 1);
        console.log([...state.carts, delItem]);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[indIndex].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
