import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signInRequest, signOutRequest, loadUserRequest} from '../services/auth';
import { setUserTokenOnHeaders, deleteUserTokenOnHeaders } from '../api';

const KEY_USER = '@Turistando_User';
const KEY_TOKEN = '@Turistando_Token';

export const AuthContext = createContext({});

const initialState = {
  user: null,
  userToken: null,
  isSignedIn: false,
  isLoading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, user: action.user, userToken: action.token, isSignedIn: true, isLoading: false };
    case 'SIGN_OUT':
      return { ...state, user: null, userToken: null, isSignedIn: false, isLoading: false };
    case 'LOAD_DATA':
      return { ...state, user: action.user, userToken: action.token, isSignedIn: !!action.token, isLoading: false };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const saveData = async ({ token, user }) => {
    await AsyncStorage.multiSet([
      [KEY_TOKEN, token],
      [KEY_USER, JSON.stringify(user)],
    ]);
  };

  const removeData = async () => {
    await AsyncStorage.multiRemove([KEY_TOKEN, KEY_USER]);
  };

  const authActions = useMemo(() => ({
    signIn: async ({ username, password }) => {
      const { token, user } = await signInRequest({ username, password });
      setUserTokenOnHeaders(token);
      await saveData({ token, user });
      dispatch({ type: 'SIGN_IN', token, user });
    },
    signOut: async () => {
      await signOutRequest();
      await removeData();
      deleteUserTokenOnHeaders();
      dispatch({ type: 'SIGN_OUT' });
    },
  }), []);

  async function loadSession() {
    const token = await AsyncStorage.getItem(KEY_TOKEN);
    let user = null;

    if (token) {
      setUserTokenOnHeaders(token);
      try {
        user = await loadUserRequest(token);
      } catch {
        const userData = await AsyncStorage.getItem(KEY_USER);
        if (userData) user = JSON.parse(userData);
      }
    }

    dispatch({ type: 'LOAD_DATA', token, user });
  }

  useEffect(() => {
    loadSession();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, ...authActions }}>
      {children}
    </AuthContext.Provider>
  );
};
