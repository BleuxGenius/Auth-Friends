import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        // config the object 
        baseURL: 'http://localhost:5000', // needs to be fixed with the information thats being grabbed 

        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};