import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-89e2d.firebaseio.com/'
});

export default instance;