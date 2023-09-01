import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  Pressable
} from 'react-native';

import { useState } from 'react';

export default function App() {

  let [texto, atualizaTexto] = useState('');
  let [lista, addItem] = useState([{ id: 0, nome: 'Vazio' }]);

  const textoDigitacao = (texto) => {
    atualizaTexto(texto);
  }

  const removerItem = (item) => {
    console.log(`Removendo: ${item.id}`)
    let copia = [...lista]
    copia.splice(item.id, 1)
    addItem(copia)
  }

  const renderGasto = (itemGasto) => {
    return <Pressable onPress={() => removerItem(lista[itemGasto.id])}>
      <View style={{
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 5
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ marginLeft: 10 }} source={require('./assets/coin.png')} />
          <Text style={{ padding: 10 }}>{itemGasto.nome}</Text>
        </View>
      </View>
    </Pressable>
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={{ flex: 1, margin: 10, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>

          <TextInput style={{ padding: 10, borderColor: 'gray', borderWidth: 2 }}
            value={texto} onChangeText={textoDigitacao} />
          <Button title='Incluir Gasto' onPress={() => {
            const novoGasto = { id: lista.length, nome: texto }
            addItem([...lista, novoGasto]);
          }} />

        </View>

        <View style={{ flex: 4 }}>
          <FlatList data={lista}
            renderItem={(gasto) => renderGasto(gasto.item)}
            keyExtractor={(gasto) => gasto.id} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
