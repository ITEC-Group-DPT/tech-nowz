import axios from 'axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string'

const loginApi = (email, password) => {
    let data = new FormData();

    data.append("command", "signIn");
    data.append("email", email);
    data.append("password", password);

    // {headers: {
    //     Userid: 13,
    // }
    return axios.post(TEST_API_URL + "userAPI.php", data);
}
export { loginApi }