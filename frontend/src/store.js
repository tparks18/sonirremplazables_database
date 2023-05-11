import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { personListReducer, personDetailsReducer } from "./reducers/personReducers";

const reducer = combineReducers({
  personList: personListReducer,
  personDetails: personDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
