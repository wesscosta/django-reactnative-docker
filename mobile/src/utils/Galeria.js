import * as ImagePicker from 'expo-image-picker';

const requestGalleryPermission = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert("Permissão necessária", "Acesse a galeria para selecionar imagens.");
  }
};
