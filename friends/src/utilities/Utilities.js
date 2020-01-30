import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        // config the object 
        baseURL: 'http://localhost:3001/api', // needs to be fixed with the information thats being grabbed 

        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};