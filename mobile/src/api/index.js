import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.19.14.107:8001',
  timeout:10000,
});

// Funções para manipular o token
export function setUserTokenOnHeaders(token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export function deleteUserTokenOnHeaders(){
  delete api.defaults.headers.common['Authorization'];
}

export default api
