import axios from './axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string';

const getOrderListAPI = () => {
	let command = 'getOrderList';
	return axios.get(TEST_API_URL + `orderAPI.php?command=${command}`);
};

const getOrderDetailAPI = (orderID) => {
	let command = 'getOrderDetail';
	return axios.get(
		TEST_API_URL + `orderAPI.php?command=${command}&orderID=${orderID}`,
	);
};

const rateProduct = (orderID, productID, rating) => {
	let data = new FormData();
	data.append('command', 'rateProduct');
	data.append('orderID', orderID);
	data.append('productID', productID);
	data.append('rating', rating);
	return axios.post(TEST_API_URL + `orderAPI.php`, data);
};

const createOrder = (deliID, name, address, phone, totalPrice, cartList) => {
	let data = new FormData();
	data.append('command', 'createOrder');
	data.append('deliID', deliID);
	data.append('name', name);
	data.append('address', address);
	data.append('phone', phone);
	data.append('totalPrice', totalPrice);
	data.append('list', JSON.stringify(cartList));
	return axios.post(TEST_API_URL + `orderAPI.php`, data);
};
export { getOrderListAPI, getOrderDetailAPI, rateProduct, createOrder };
