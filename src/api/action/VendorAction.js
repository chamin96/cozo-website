import axios from "axios";

export const vendorSendRequest  = data => {
    return axios.post(`${process.env.REACT_APP_API_URL}/vendor/sendRequest`, data);
}

export const getVendors = data => {
    return axios.get(`${process.env.REACT_APP_API_URL}/customer/vendors`)
}

export const professionalSendRequest = data => {
    return axios.post(`${process.env.REACT_APP_API_URL}/professional/sendRequest`, data);
}