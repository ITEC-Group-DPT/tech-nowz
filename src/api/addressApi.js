import axios from 'axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string'

const getAddressBook = () => {
    let command = "getDelivery";
    let header = {userid: 17}
    return axios.get(TEST_API_URL + `deliAPI.php?command=${command}`,{headers: header});
}
const createAddressBook = (name,address,phone) => {
    let header = {userid: 17}
    let data = new FormData();
    data.append("command", "create");
    data.append("name", name);
    data.append("address", address);
    data.append("phone", phone);
    return axios.post(TEST_API_URL + `deliAPI.php`,data, {headers: header});
}
const deleteAddressBook = (id)=>{
    let header = {userid: 17}
    let data = new FormData();
    data.append("command", "delete");
    data.append("deliID", id);
    return axios.post(TEST_API_URL + `deliAPI.php`,data, {headers: header});
 
}

export { getAddressBook,createAddressBook,deleteAddressBook};