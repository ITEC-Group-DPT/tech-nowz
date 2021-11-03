import axios from "./axios";
import { BASE_API_URL, TEST_API_URL } from '../constant/string'

const getCartApi = () => {
    let command = "getCartList";

    return axios.get(TEST_API_URL + `cartAPI.php?command=${command}`);
}

const getCartQuantityApi = () => {
    let command = "getTotalQuantity";
    return axios.get(TEST_API_URL + `cartAPI.php?command=${command}`);}

const addProductToCartApi = (productID) => {

    let data = new FormData();
    data.append("command","add");
    data.append("productID",productID);
    return axios.post(TEST_API_URL + `cartAPI.php`, data);
}

const removeProductFromCartApi = (productID) => {

    let data = new FormData();
    data.append("command","remove");
    data.append("productID",productID);
    return axios.post(TEST_API_URL + `cartAPI.php`, data);
}

const increaseQuantityApi = (productID) => {
    let data = new FormData();

    data.append("command","increase");
    data.append("productID", productID);

    return axios.post(TEST_API_URL + `cartAPI.php`, data);
}

const decreaseQuantityApi = (productID) => {
    let data = new FormData();

    data.append("command","decrease");
    data.append("productID", productID);

    return axios.post(TEST_API_URL + `cartAPI.php`, data);
}

const removeAllApi = () => {
    let data = new FormData();

    data.append("command","removeAll");

    return axios.post(TEST_API_URL + `cartAPI.php`,data);
}

export { 
    getCartApi,
    addProductToCartApi,
    removeProductFromCartApi,
    getCartQuantityApi,
    increaseQuantityApi,
    decreaseQuantityApi,
    removeAllApi,
};
