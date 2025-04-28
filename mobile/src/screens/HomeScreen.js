import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../api';
import CategoryCard from '../components/CategoryCard';
import TouristCard from '../components/TouristCard';

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    api.get('categorias/').then(res => setCategories(res.data));
    api.get('pontos/?ordering=-visualizacoes').then(res => setPopular(res.data.slice(0, 5)));
  }, []);

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
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
