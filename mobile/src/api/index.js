import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.19.14.8:8001/api/',
  timeout:10000,
});

// Manipular o token
export function setUserTokenOnHeaders(token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export function deleteUserTokenOnHeaders(){
  delete api.defaults.headers.common['Authorization'];
}

export default api
