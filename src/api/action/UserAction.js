import axios from "axios";

export const logInCustomer  = data => {
    return axios.post(`${process.env.REACT_APP_API_URL}/customer/login`, data);
}

export const getCartData = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/customer/cart`, {
        headers: {
            Authorization: localStorage.access_token
        }
    });
}

export const getWishList = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/customer/favourites`, {
        headers: {
            Authorization: localStorage.access_token
        }
    });
}