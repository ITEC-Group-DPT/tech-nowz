import axios from "./axios";
import { BASE_API_URL, TEST_API_URL } from "../constant/string";

const getAddressBook = () => {
	let command = "getDelivery";
	return axios.get(TEST_API_URL + `deliAPI.php?command=${command}`);
};
const createAddressBook = (name, address, phone) => {
	let data = new FormData();
	data.append("command", "create");
	data.append("name", name);
	data.append("address", address);
	data.append("phone", phone);
	return axios.post(TEST_API_URL + `deliAPI.php`, data);
};
const deleteAddressBook = (id) => {
	let data = new FormData();
	data.append("command", "delete");
	data.append("deliID", id);
	return axios.post(TEST_API_URL + `deliAPI.php`, data);
};
const editAddressBook = (id, name, address, phone) => {
	let data = new FormData();
	data.append("command", "update");
	data.append("deliID", id);
	data.append("name", name);
	data.append("address", address);
	data.append("phone", phone);
	return axios.post(TEST_API_URL + `deliAPI.php`, data);
};
export {
	getAddressBook,
	createAddressBook,
	deleteAddressBook,
	editAddressBook,
};
