import Axios from 'axios'

const apiUrl = 'http://192.168.0.199:3000';

let instance = Axios.create({
  baseURL: apiUrl,
  timeout: 5000
});

instance.defaults.headers['Content-Type'] = 'application/json';

export default instance;
