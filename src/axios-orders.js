import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fac2d.firebaseio.com/'
});

export default instance;