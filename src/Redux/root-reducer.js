import { combineReducers } from "redux";
// reducers
import productReducer from "./Product/reducer";

const rootReducer = combineReducers({
  product: productReducer
});

export default rootReducer;
