import axios from "axios";
import { BASE_API_URL, TEST_API_URL } from '../constant/string'

const instance = axios.create({
    baseURL: TEST_API_URL,
});

const object = sessionStorage.getItem("userInfo");
if (object) {
    const { userID } = JSON.parse(object);

    console.log('userID: ', userID);
    // Alter defaults after instance has been created
    instance.defaults.headers.common['Userid'] = userID;
}

instance.interceptors.request.use(
    config => {
        if (!config.headers.Userid) {
            console.log('run interceptor');
            const token = JSON.parse(sessionStorage.getItem("userInfo"));

            if (token) {
                config.headers.Userid = token.userID;
            }
        }

        return config;
    },
    error => Promise.reject(error)
);
export default instance;