import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
	productList: productListReducer, // this is what shows as the piece of state
	productDetails: productDetailsReducer,
	cart: cartReducer,
});
const initialState = {};

// what we want used for middleware
const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	// this just stores whatever is in the middleware variable
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
