import axios from './axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string';

const getOrderListAPI = () => {
	//temporary for testing
	let command = 'getOrderList';
	return axios.get(TEST_API_URL + `orderAPI.php?command=${command}`);
};

const getOrderDetailAPI = (orderID) => {
	//temporary for testing
	let command = 'getOrderDetail';
	return axios.get(
		TEST_API_URL + `orderAPI.php?command=${command}&orderID=${orderID}`
	);
};

export { getOrderListAPI, getOrderDetailAPI };
