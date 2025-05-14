import React, { createContext, useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    // Verificar permissões ao carregar
    requestPermissions();
  }, []);

  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permissão necessária", "Acesse a galeria para selecionar imagens.");
    } else {
      setHasGalleryPermission(true);
    }
  };

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permissão negada", "Localização é necessária para mapear pontos.");
    } else {
      setHasLocationPermission(true);
    }
  };

  const requestPermissions = async () => {
    await requestGalleryPermission();
    await requestLocationPermission();
  };

  return (
    <PermissionContext.Provider value={{ hasGalleryPermission, hasLocationPermission }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermissions = () => React.useContext(PermissionContext);
