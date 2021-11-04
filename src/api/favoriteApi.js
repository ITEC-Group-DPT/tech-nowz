import axios from './axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string'

const getFavoriteListApi = () => {
    let command = "getFavoriteList";
    return axios.get(TEST_API_URL + `favorAPI.php?command=${command}`);
}

const changeFavoriteApi = (productID) => {
    let data = new FormData();
    let command = "changeFavorite";
    data.append("productID", productID);
    data.append("command", command);
    return axios.post(TEST_API_URL + "favorAPI.php", data);
}

export { getFavoriteListApi, changeFavoriteApi };