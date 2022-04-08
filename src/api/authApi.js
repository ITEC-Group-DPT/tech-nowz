import axios from './axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string'

const signInApi = (email, password) => {
    let data = new FormData();
    data.append("command", "signIn");
    data.append("email", email);
    data.append("password", password);
    return axios.post(TEST_API_URL + "userAPI.php", data);
}

const signUpApi = (email, username, password) => {
    let data = new FormData();
    data.append("command", "signUp");
    data.append("email", email);
    data.append("username", username);
    data.append("password", password);
    return axios.post(TEST_API_URL + "userAPI.php", data);
}

const updateUserVisitAPI = () => {
    let data = new FormData();
    data.append("command", "updateVisit");

    return axios.post(TEST_API_URL + "userAPI.php", data);
}

const validateApi = () => {
    return axios.post(TEST_API_URL + "userAPI.php?command=checkToken");
}

export { signInApi, signUpApi, validateApi, updateUserVisitAPI }