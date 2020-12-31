import axios from "axios";

export const vendorSendRequest  = data => {
    return axios.post(`${process.env.REACT_APP_API_URL}/vendor/sendRequest`, data);
}