import axios from "axios";

export const postAddress = (data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/customer/address`, data, {
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

export const getAllProducts = (params = {}) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/products?limit=100&page=1`, {
        params
    })
}

export const addToCart = data => {
    return axios.post(`${process.env.REACT_APP_API_URL}/customer/cart`, data, {
        headers: {
            Authorization: localStorage.access_token
        }
    })
}