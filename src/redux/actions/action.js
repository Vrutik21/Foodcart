export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove items
export const DEL = (id) => {
  return {
    type: "DEL_CART",
    payload: id,
  };
};

// decrement item
export const DEC = (item) => {
  return {
    type: "DEC_CART",
    payload: item,
  };
};
