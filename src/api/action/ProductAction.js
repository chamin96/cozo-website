import axios from "axios";

export const postAddress = (data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/customer/adress`, data, {
        headers: {
            Authorization: localStorage.access_token
        }
    });
}

export const postCreditCard = data => {
    return axios.post(`${process.env.REACT_APP_API_URL}/customer/creditCard`, data, {
        headers: {
            Authorization: localStorage.access_token
        }
    });
}

export const getProductById = id => {
    return axios.get(`${process.env.REACT_APP_API_URL}/products/product/${id}`);
}

export const getCategories = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/categories`)
}

export const getAllProducts = (parmas ={}) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/products?limit=100&page=1`)
}