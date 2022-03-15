import axios from './axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string';


const changeUsernameAPI = (username) => {
	let data = new FormData();
    data.append('command',"updateUsername")
	data.append('newusername', username);
	return axios.post(TEST_API_URL + `userAPI.php`, data);
};

const changePasswordAPI = (oldPW, newPW) => {
	let data = new FormData();
    data.append('command',"updatePassword")
	data.append('oldpassword', oldPW);
	data.append('newpassword', newPW);
	return axios.post(TEST_API_URL + `userAPI.php`, data);

	//check new1 == new2 => check opw != new pw => send axios
};
export { changeUsernameAPI, changePasswordAPI };
