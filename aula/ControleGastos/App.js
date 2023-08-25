import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  // let numero = 0

  let [texto, atualizaTexto] = useState('');
  let [numero, atualizarNumero] = useState(0);
  let [lista, addItem] = useState([{ id: 0, nome: 'Vazio' }]);

  const frase = () => {
    return "Bom dia"
  }

  const textoDigitacao = (texto) => {
    atualizaTexto(texto);
  }

  const incrementar = () => {
    atualizarNumero(++numero);
  }

  let letras = [{ id: 1, nome: 'Abacate' }, { id: 2, nome: 'Banana' }, { id: 3, nome: 'Abacaxi' }]
  let outrasletras = [...letras]

  return (
    <View style={{ flex: 1, margin: 10, padding: 10, borderColor: "#FF0000", borderWidth: 5 }}>
      <View style={{ flex: 3, borderColor: "#00FF00", borderWidth: 5 }}>
        <Text style={{ fontSize: 30 }}>{frase()} {numero} !!!</Text>
        <Button title='Incrementar' onPress={incrementar} />

        <TextInput style={{ padding: 10, margin: 10, borderColor: "#FF0000", borderWidth: 1 }}
          value={texto} onChangeText={textoDigitacao} inputMode='numeric' />
        <Button title='Novo Valor' onPress={() => {
          atualizarNumero(parseInt(texto))
        }} />

      </View>
      <View style={{ flex: 2, borderColor: "#0000FF", borderWidth: 5 }}>
        <Button title='Novo Item' onPress={() => {
          addItem([...lista, { id: lista.length + 1, nome: 'Item Novo' }])
        }} />
        {lista.map((item) => <Text style={{ fontSize: 32 }} key={item.id}>{item.nome}</Text>)}
        <Text>{texto}</Text>
        <Text>Texto 3</Text>
      </View>
    </View>
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
