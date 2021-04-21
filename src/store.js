import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {increment} from "./VariableConst";

const initialState={}
const testReducerInitial = { count: 0, ajit1: 2 };
const testReducer = (state = testReducerInitial,action) => {
  const { payload, type } = action;
  switch (type) {
      case increment:
          return {...state,count:payload+1}
    default: 
    return state
  }
};

// const testReducerInitial1 = { count2: 0, ajit2: 2 };
// const testReducer2 = (state = testReducerInitial,action) => {
//   const { payload, type } = action;
// };


const reducer=combineReducers({
    test:testReducer,
    // test2:testReducer2
})
const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store