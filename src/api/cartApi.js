import axios from "./axios";
import { BASE_API_URL, TEST_API_URL } from '../constant/string'

const getCartApi = () => {
    let command = "getCartList";

    return axios.get(TEST_API_URL + `cartAPI.php?command=${command}`);
}

export { getCartApi };