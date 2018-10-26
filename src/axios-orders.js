import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-api-516c9.firebaseio.com/'
});

export default instance;