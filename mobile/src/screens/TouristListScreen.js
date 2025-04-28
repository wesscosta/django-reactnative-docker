
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import api from '../api';
import TouristCard from '../components/TouristCard';

export default function TouristListScreen({ route, navigation }) {
  const [tourists, setTourists] = useState([]);

  useEffect(() => {
    let url = 'pontos/';
    if (route.params?.categoria) url += `?categoria=${route.params.categoria}`;
    if (route.params?.municipio) url += `?municipio=${route.params.municipio}`;
    api.get(url).then(res => setTourists(res.data));
  }, [route.params]);

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={tourists}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouristCard item={item} onPress={() => navigation.navigate('Detalhes', { id: item.id })} />
        )}
        ListEmptyComponent={<Text>Nenhum ponto turístico encontrado.</Text>}
      />
    </View>
  );
}
