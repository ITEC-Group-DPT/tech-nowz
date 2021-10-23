import axios from 'axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string'

const getOrderListAPI = () => {
    //temporary for testing
    let command = "getOrderList";
    let header = {
        "userid": 13,
    }
    return axios.get(TEST_API_URL + `orderAPI.php?command=${command}`, {headers: header});
}

const getOrderDetailAPI = (orderID) => {
    //temporary for testing
    let command = "getOrderDetail";
    let header = {
        "userid": 13,
    }
    return axios.get(TEST_API_URL + `orderAPI.php?command=${command}&orderID=${orderID}`, {headers: header});
}

export { getOrderListAPI, getOrderDetailAPI };