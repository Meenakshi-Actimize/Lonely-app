import { createStore } from "redux";
import  { rootReducer }  from "./reducer/rootreducer";

 

 
  export const Store = createStore(rootReducer);