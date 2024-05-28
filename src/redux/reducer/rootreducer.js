import reducer1 from "./reducer";
import reducer2 from "./reducer2";
import { combineReducers } from "redux";
import reducer3 from "./reducer3";

export const rootReducer = combineReducers({reducer1, reducer2, reducer3})