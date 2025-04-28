
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../api';

export default function CitiesScreen({ navigation }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    api.get('municipios/').then(res => setCities(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Municípios</Text>
      <FlatList
        data={cities}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Turisticos', { municipio: item.id })}>
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  item: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 6
  }
});

