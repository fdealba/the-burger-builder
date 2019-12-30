import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-d71e2.firebaseio.com/'
});

export default instance;

