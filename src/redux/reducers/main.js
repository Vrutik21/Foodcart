import { combineReducers } from "redux";
import { cartReducer } from "./reducer";

const mainReducer = combineReducers({
  cartReducer,
});

export default mainReducer;
