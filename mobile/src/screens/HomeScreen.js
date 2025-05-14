import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';
import CategoryCard from '../components/CategoryCard';
import TouristCard from '../components/TouristCard';
import { signOutRequest } from '../services/auth'; 

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);  // Controle de carregamento

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem("loggedIn");
      if (loggedIn !== "true") {
        navigation.replace("Login");
      }
    };
    checkLoginStatus();
  }, [navigation]);

    const handleLogin = async () => {
    try {
      await signOutRequest();
      await AsyncStorage.setItem("loggedIn", "false");
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Erro", "Falha na autenticação");
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await api.get('categorias/');
        const popularResponse = await api.get('pontos/?ordering=-visualizacoes');
        
        setCategories(categoryResponse.data);
        setPopular(popularResponse.data.slice(0, 5));
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196f3" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar ponto ou município"
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.title}>Categorias</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryCard item={item} onPress={() => navigation.navigate('Turisticos', { categoria: item.id })} />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.title}>Mais Visitados</Text>
      {popular.map((item) => (
        <TouristCard key={item.id} item={item} onPress={() => navigation.navigate('Detalhes', { id: item.id })} />
      ))}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cidades')}>
        <Text style={styles.buttonText}>Ver Municípios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Logoff</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  btn: {
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: 'bold' },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
