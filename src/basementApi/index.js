import Axios from 'axios'

const apiUrl = 'http://89.161.51.150:3000';

let instance = Axios.create({
  baseURL: apiUrl,
  timeout: 5000
});

instance.defaults.headers['Content-Type'] = 'application/json';

export default instance;
