import { useEffect } from "react";
import AppRoutes from "./src/navigation";
import * as SplashScreen from 'expo-splash-screen';
import { setUserTokenOnHeaders } from './src/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const initializeApp = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setUserTokenOnHeaders(token);
      }

      // Aguarda 3 segundos e esconde a splash screen
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);
    };

    initializeApp();
  }, []);

  return <AppRoutes />;
}
