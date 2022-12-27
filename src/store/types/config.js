import { combineReducers, createStore } from "redux";
import { tryglassesReducer } from "../reducers/tryglassesReducer";

const rootReducer = combineReducers({
  tryglassesReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
