import { createContext } from "react";

const KEY_USER = '@App_User';
const KET_TOKEN = '@App_UserToken';

export const AuthContext = createContext({});

const initialState = {
  user: null,
  userToken: null,
  isSignedIn: false,
  isLoading: true,
}

function authReducer(state, action){
  switch (action.type){
    case 'SIGN_IN':
      return {...state, user: action.user, userToken: action.token, isSignedIn: true, isLoading: false };

    case 'SIGN_OUT':
      return {...state, user:null, userToken: null, isSignedIn:false, isLoading: false };

    case 'LOAD_DATA':
      return {...state, user: action.user, userToken: action.token, isSignedIn: !!action.token, isLoading: false };
    default:
      return state
  }
}
