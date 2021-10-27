import axios from './axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string';

const searchProductsAPI = (searchValue) => {
	//temporary for testing
	let command = 'searchProducts';
	return axios.get(
		TEST_API_URL +
			`productAPI.php?command=${command}&searchValue=${searchValue}`
	);
};

export { searchProductsAPI };
