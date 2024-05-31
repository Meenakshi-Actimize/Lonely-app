import reducer1 from "./reducer";
import reducer2 from "./reducer2";
import { combineReducers } from "redux";
import reducer3 from "./reducer3";
import reducer4 from "./reducer4";
import reducer5 from "./reducer5";
import reducer6 from "./reducer6";

export const rootReducer = combineReducers({reducer1, reducer2, reducer3, reducer4, reducer5, reducer6})