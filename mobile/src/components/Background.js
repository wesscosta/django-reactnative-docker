import { ImageBackground, StyleSheet, View } from 'react-native';

export default function Background() {
  return (
    <ImageBackground
    style={styles.imageBackground}
    source={require('../../assets/splash.png')} 
    contentFit="cover"
  />


  );
}

const styles = StyleSheet.create({  
  imageBackground: {
    width: '100%',
    height: "100%",
    margin:0,
    padding:0,
  },
});
