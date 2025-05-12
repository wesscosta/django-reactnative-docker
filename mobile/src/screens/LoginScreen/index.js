import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { signInRequest } from "../../services/auth";
import api from "../../api";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   //Verifica se o usuario já está logado
  //   const checkLoginStatus = async () => {
  //     const loggedIn = await AsyncStorage.getItem("loggedIn");
  //     if (loggedIn === "true") {
  //       navigation.replace("Home");
  //     }
  //   };
  //   checkLoginStatus();
  // }, []);

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await api.post("auth/", { username, password });
        const token = response.data.access;
        
        if (token) {
          console.log(token);
          await AsyncStorage.setItem('loggedIn','true');
          await AsyncStorage.setItem('token', token);
        }
        // if (user){
        //   await AsyncStorage.setItem("user", JSON.stringify(user))
        // }
        navigation.replace('Home')

      } catch (error) {
        Alert.alert("Erro", "Falha na autenticação");
        console.error(error);
      }
    } else {
      Alert.alert("Erro", "Digite um Usuario e Senha!");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
