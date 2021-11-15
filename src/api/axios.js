import axios from 'axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string';
import { decryptData } from '../constant/utils';
const instance = axios.create({
	baseURL: TEST_API_URL,
});

const token = sessionStorage.getItem('userInfo');
if (token) {

	let data = decryptData(token);
	console.log('data: ',data);
	const { userID } = JSON.parse(data);
	// Alter defaults after instance has been created
	instance.defaults.headers.common['Userid'] = userID;
}

instance.interceptors.request.use(
	(config) => {
		if (!config.headers.Userid) {

			let token = sessionStorage.getItem('userInfo');

			if (token) {
				let data = JSON.parse(decryptData(token));
				config.headers.Userid = data.userID;
			}
		}
		return config;
	},
	(error) => Promise.reject(error)
);
export default instance;
