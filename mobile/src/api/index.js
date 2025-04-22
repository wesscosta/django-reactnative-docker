import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.19.14.107:8001/api/',
  timeout:10000,
});

export default api
