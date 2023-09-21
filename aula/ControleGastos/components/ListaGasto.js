import {
    Text,
    View,
    FlatList,
    Image,
    Pressable,
} from 'react-native';

export const ListaGasto = (props) => {

    const removerItem = (itemRemover) => {
        console.log(`Removendo: ${itemRemover}`)
        let copia = [...props.lista]
        copia = copia.filter((itemLista) => itemRemover.id != itemLista.id)
        props.atualizarListaCallback(copia)
    }

    const renderGasto = (itemGasto) => {
        return <View style={{
            borderRadius: 8,
            borderColor: 'gray',
            borderWidth: 2,
            marginBottom: 5
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>

                <Pressable style={{ flex: 1 }} onPress={() => {
                    props.navigation.navigate('Detalhes', { item: itemGasto })
                }}>
                    <Image source={require('../assets/coin.png')} />
                </Pressable>

                <Pressable style={{ flex: 15 }} onPress={() => removerItem(itemGasto)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ padding: 10 }}>{itemGasto.nome}</Text>
                        <Text style={{ padding: 10 }}>{itemGasto.valor}</Text>
                    </View>
                </Pressable >
            </View>
        </View>
    }

    return <FlatList data={props.lista} style={{ marginTop: 10 }}
        renderItem={(gasto) => renderGasto(gasto.item)}
        keyExtractor={(gasto) => gasto.id} />
}