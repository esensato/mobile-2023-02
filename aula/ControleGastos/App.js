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
  Pressable,
  KeyboardAvoidingView
} from 'react-native';

import { useState } from 'react';

export default function App() {

  let [texto, atualizaTexto] = useState('');
  let [lista, addItem] = useState([{ id: 0, nome: 'Vazio' }]);

  const textoDigitacao = (texto) => {
    atualizaTexto(texto);
  }

  const removerItem = (itemRemover) => {
    console.log(`Removendo: ${itemRemover}`)
    let copia = [...lista]
    copia = copia.filter((itemLista) => itemRemover.id != itemLista.id)
    addItem(copia)
  }

  const renderGasto = (itemGasto) => {
    return <Pressable onPress={() => removerItem(itemGasto)}>
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

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={{ flex: 1, margin: 10, padding: 10 }}>

          <TextInput style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 2 }}
            value={texto} onChangeText={textoDigitacao} />

          <Button title='Incluir Gasto' onPress={() => {
            const novoGasto = { id: lista.length, nome: texto }
            addItem([...lista, novoGasto]);
          }} />

          <FlatList data={lista} style={{ marginTop: 10 }}
            renderItem={(gasto) => renderGasto(gasto.item)}
            keyExtractor={(gasto) => gasto.id} />
        </View>


      </KeyboardAvoidingView>
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
