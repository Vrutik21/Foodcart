import mainReducer from "./redux/reducers/main";
import { legacy_createStore as createStore } from "redux";

const store = createStore(mainReducer);

export default store;
