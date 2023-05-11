import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import missingPersonListReducer from './reducers/missingPersonListReducer'

const reducer = combineReducers({
    missingPersonList: missingPersonListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = configureStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store