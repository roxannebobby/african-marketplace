import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
	productList: productListReducer, // this is what shows as the piece of state
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
