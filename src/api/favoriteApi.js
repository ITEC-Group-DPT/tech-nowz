import axios from './axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string';

const getFavoriteListApi = () => {
	let header = { userid: 23 };
	let command = 'getFavoriteList';

	return axios.get(TEST_API_URL + `favorAPI.php?command=${command}`, {
		headers: header,
	});
};

const changeFavoriteApi = (productID) => {
	let data = new FormData();
	let header = { userid: 23 };
	let command = 'changeFavorite';
	data.append('productID', productID);
	data.append('command', command);

	return axios.post(TEST_API_URL + 'favorAPI.php', data, { headers: header });
};

export { getFavoriteListApi, changeFavoriteApi };
