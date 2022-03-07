import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
} from '../constants/productConstants';
import axios from 'axios';

// here thunk allows us to create a function within a function for async
export const listProducts = () => async (dispatch) => {
	try {
		//dispatch the product request
		dispatch({ type: PRODUCT_LIST_REQUEST });
		// get the data
		const { data } = await axios.get('/api/products');
		//displatch the product success
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
