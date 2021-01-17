import axios from "axios";

export const searchProfessional = (data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/customer/professionalsSearch`, data, {
        headers: {
            Authorization: localStorage.access_token
        }
    });
}