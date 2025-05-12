import api from '../api'

export async function signInRequest({username, password}){
    const response = await api.post("auth/", { username, password });
    const token = response.data.token;

  localStorage.setItem('token', token);
  setUserTokenOnHeaders(token);

  return {token}; 
}

export async function signOutRequest(){
  localStorage.removeItem('token');
  deleteUserTokenOnHeaders();
  return Promise.resolve();
}

//exemplo de endpoint que retorna o usuario atual
export async function loadUserRequest(){
  const response = await api.get('/me');
  return response.data
}
