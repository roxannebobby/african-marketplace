import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';

// handles the state for product lists
// reducer takes in 1) initial state, 2) an action with type and payload
export const productListReducer = (state = { products: [] }, action) => {
	//  now we evaluate the type using switch
	switch (action.type) {
		case PRODUCT_LIST_REQUEST: // fetch request
			return { loading: true, products: [] };
		case PRODUCT_LIST_SUCCESS: //successful response
			return { loading: false, products: action.payload };
		case PRODUCT_LIST_FAIL: // error response
			return { loading: false, error: action.payload };
		default:
			return state; // return initial state (above)
	}
};

export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action
) => {
	//  now we evaluate the type using switch
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST: // fetch request
			return { loading: true, ...state };
		case PRODUCT_DETAILS_SUCCESS: //successful response
			return { loading: false, product: action.payload };
		case PRODUCT_DETAILS_FAIL: // error response
			return { loading: false, error: action.payload };
		default:
			return state; // return initial state (above)
	}
};
