import axios from 'axios';

axios.defaults.baseURL = process.env.CLIENT_API_URL;

export default axios;