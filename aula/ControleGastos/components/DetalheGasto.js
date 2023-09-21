import { Text, View } from "react-native"

export const DetalheGasto = (props) => {

    return <View style={{ flex: 1 }}>
        <Text style={{ margin: 10, fontSize: 30 }}>{props.route.params.item.nome}</Text>
        <Text style={{ margin: 10, fontSize: 30 }}>{props.route.params.item.valor}</Text>
    </View>

}