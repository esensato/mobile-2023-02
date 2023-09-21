import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Modal,
  Text,
  Pressable
} from 'react-native';

import { useState } from 'react';

import { EntradaGasto } from './EntradaGasto'
import { ListaGasto } from './ListaGasto'

export const Principal = (props) => {

  let [lista, addItem] = useState([{ id: 0, nome: 'Vazio', valor: 0 }]);
  let [visivel, setVisivel] = useState(false);

  const adicionarItem = (nomeItem, valorItem) => {
    const novoGasto = { id: lista.length, nome: nomeItem, valor: valorItem }
    addItem([...lista, novoGasto]);
    setVisivel(true);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={{ flex: 1, margin: 10, padding: 10 }}>

          <EntradaGasto adicionarItemCallback={adicionarItem} />
          <ListaGasto lista={lista} atualizarListaCallback={addItem} navigation={props.navigation} />

        </View>

      </KeyboardAvoidingView>

      <Modal visible={visivel} transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Gasto Incluído</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisivel(false)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    borderColor: 'red'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  }
});
