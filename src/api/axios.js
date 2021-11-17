import axios from 'axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string';
import { decryptData } from '../constant/utils';
const instance = axios.create({
	baseURL: TEST_API_URL,
});

const getUserIDFromSessionStorage = () => {
	const token = sessionStorage.getItem("userInfo");

	let data = decryptData(token);

	const { userID } = JSON.parse(data);

	return userID;
}

try {
	// Alter defaults after instance has been created
	instance.defaults.headers.common['Userid'] = getUserIDFromSessionStorage();
} catch (error) {
	sessionStorage.clear();
}


instance.interceptors.request.use(
	(config) => {
		if (!config.headers.Userid) {

			try {
				// Alter defaults after instance has been created
				config.headers.Userid = getUserIDFromSessionStorage();
			} catch (error) {
				sessionStorage.clear();
			}
		}
		return config;
	},
	(error) => Promise.reject(error)
);
export default instance;
