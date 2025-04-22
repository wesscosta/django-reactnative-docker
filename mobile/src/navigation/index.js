import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';
import TouristListScreen from '../screens/TouristListScreen';
import TouristDetailScreen from '../screens/TouristDetailScreen';
import TouristFormScreen from '../screens/TouristFormScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cidades" component={CitiesScreen} />
        <Stack.Screen name="Turisticos" component={TouristListScreen} />
        <Stack.Screen name="Detalhes" component={TouristDetailScreen} />
        <Stack.Screen name="Cadastro" component={TouristFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
