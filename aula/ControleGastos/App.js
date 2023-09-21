import { Principal } from './components/Principal'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetalheGasto } from './components/DetalheGasto';

export default function App() {

  const Stack = createNativeStackNavigator();
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Gastos" component={Principal} />
      <Stack.Screen name="Detalhes" component={DetalheGasto} />
    </Stack.Navigator>
  </NavigationContainer>

}
