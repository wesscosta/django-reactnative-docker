import { useEffect } from "react";
import AppRoutes from "./src/navigation";
import *  as SplashScreen from 'expo-splash-screen'
import { setUserTokenOnHeaders } from './api';

SplashScreen.preventAutoHideAsync();

export default function App() {
  
const token = localStorage.getItem('token');
if (token) {
  setUserTokenOnHeaders(token);
}

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, []);


  return  <AppRoutes />;
}
