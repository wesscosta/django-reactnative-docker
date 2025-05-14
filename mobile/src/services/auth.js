import api, { setUserTokenOnHeaders, deleteUserTokenOnHeaders } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function signInRequest({ username, password }) {
  try {
    const response = await api.post("auth/", { username, password }, {
      headers: { 'Content-Type': 'application/json' }
    });
    const token = response.data.token;
    
    await AsyncStorage.setItem('token', token);
    setUserTokenOnHeaders(token);
    return { token }; 

  } catch (error) {
    console.error("Falha na autenticação", error);
    throw error;
  }
}

export async function signOutRequest(){
  await AsyncStorage.removeItem('token');
  deleteUserTokenOnHeaders();
  return Promise.resolve();
}

//Retorna o usuario atual
export async function loadUserRequest(){
  const response = await api.get('/me');
  return response.data
}
