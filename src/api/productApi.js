import axios from './axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string';

const getProductCategoryAPI = (category, orderBy = 'rating', option = 'DESC', offset = 0, limit = 8) => {
	let command = 'getProductCategory';
	return axios.get(
		TEST_API_URL +
			`productAPI.php?command=${command}&typeOfProduct=${category}&orderBy=${orderBy}&option=${option}&offset=${offset}&limit=${limit}`
	);

};

const getTopRatingAPI = (limit = 10) => {
	let command = 'getTopRating';
	return axios.get(
		TEST_API_URL + `productAPI.php?command=${command}&limit=${limit}`
	);
};

const getProductAPI = (productID) => {
	let command = 'getProduct';
	return axios.get(
		TEST_API_URL +
			`productAPI.php?command=${command}&productID=${productID}`
	);
};

const searchProductsAPI = (searchValue) => {
	let command = 'searchProducts';
	return axios.get(
		TEST_API_URL +
			`productAPI.php?command=${command}&searchValue=${searchValue}`
	);
};

export {
	getProductCategoryAPI,
	getTopRatingAPI,
	getProductAPI,
	searchProductsAPI,
};
