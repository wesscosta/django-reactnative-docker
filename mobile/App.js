import { useEffect } from "react";
import AppRoutes from "./src/navigation";
import *  as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

export default function App() {
  
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, []);


  return  <AppRoutes />;
}
