import { TextInput, Button } from 'react-native';
import { useState } from 'react';

export const EntradaGasto = (props) => {

    let [texto, atualizaTexto] = useState('');
    let [valor, atualizaValor] = useState('');

    const textoDigitacao = (texto) => {
        atualizaTexto(texto);
    }
    const valorDigitacao = (texto) => {
        atualizaValor(texto);
    }

    return <>
        <TextInput style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 2 }}
            value={texto} onChangeText={textoDigitacao}
            placeholder="Descrição do Gasto" />

        <TextInput style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 2 }}
            value={valor} onChangeText={valorDigitacao}
            placeholder="Valor do Gasto"
            inputMode='decimal' />

        <Button title='Incluir Gasto' onPress={() => {
            atualizaTexto('');
            atualizaValor('')
            props.adicionarItemCallback(texto, valor);
        }} />
    </>
}