import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { signInRequest } from "../../services/auth";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Verifica se o usuário já está logado
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem("loggedIn");
      if (loggedIn === "true") {
        navigation.replace("Home");
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    try {
      await signInRequest({ username, password });
      await AsyncStorage.setItem("loggedIn", "true");
      navigation.replace("Home");
    } catch (error) {
      Alert.alert("Erro", "Falha na autenticação");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
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
