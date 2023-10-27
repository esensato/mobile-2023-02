## App Lista de Universidades

- Criar um app para listar universidades pelo mundo utilizando a URL

`http://universities.hipolabs.com/search?country=brazil&name=Univ`

# Preparação

- Criar uma classe para conter o formulário de pesquisa

```dart
import 'package:flutter/material.dart';

class FormularioPesquisa extends StatelessWidget{

  @override
  Widget build(BuildContext context) {
    return null;
  }

}
```
- Criar uma classe para a listagem

```dart
class ListaResultado extends StatelessWidget{

  @override
  Widget build(BuildContext context) {
    return null;
  }

}
```

# Main

- Criar um **Stateless Widget**

```dart
class PesquisaUniversidadesStateless extends StatelessWidget {
    const PesquisaUniversidadesStateless({super.key});
    
    @override
    Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Pesquisa de Universidades',
        theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
        ),
        home: const PesquisaUniversidadesStateful(),
    );
    }
}
```
- Criar um **Stateful Widget**
```dart
class PesquisaUniversidadesStateful extends StatefulWidget {
  const PesquisaUniversidadesStateful({super.key});

  @override
  State<PesquisaUniversidadesStateful> createState() => _PesquisaUniversidadesState();
}
```
- Criar um **State**
```dart
class _PesquisaUniversidadesState extends State<PesquisaUniversidadesStateful> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Pesquisa Universidade'),
      ),
      body: Column()
    );
  }
}
```
# Formulário

- Declarar um formulário dentro do `build`
```dart
final formKey = GlobalKey<FormState>();
return Form(
    key: formKey,
    child:  Column(
    children: <Widget>[
    // itens do formulário (campos, botões, etc...)
    ],
    ),
);
```
- Criar uma função para construir campos de texto

```dart
  Widget buildTextFormField({label = "", controller}) {
    return Padding(padding: const EdgeInsets.all(10.0),
      child: TextFormField(  decoration: InputDecoration(
        border: const UnderlineInputBorder(),
        labelText: label,
      ),),
    );
  }
```
- Declarar os controladores `TextEditingController` dos campos de texto

```dart
final pais = TextEditingController();
final universidade = TextEditingController();
```
- Colocar os campos de texto no formulário

```dart
buildTextFormField(label: 'Nome do país', controller: pais),
buildTextFormField(label: 'Nome da Universidade', controller: universidade),
```
- Definir uma função de *callback* que será acionada quando o usuário desejar submeter a pesquisa e adicioná-la ao construtor

```dart
Function callback;

FormularioPesquisa(this.callback, {super.key});
```

- Adicionar o botão para submeter a pesquisa
- 
```dart
ElevatedButton(child: const Text('Pesquisar'), onPressed: () => callback(pais.text, universidade.text)),
```
# Lista

- Widget para exibição de itens em uma lista: `ListView.builder()`
- Propriedades:
    - `Widget itemBuilder: (context, id){}`
    - `itemCount`
    - `shrinkWrap`
    - `padding`
- `ListTile` representa cada um dos itens da lista
    - `title`
    - `onTap`

- Em `ListaResultado` adicionar os atributos e o construtor

```dart
var lista = [];
Function callback;

ListaResultado(this.lista, this.callback);
```

- Construir o `ListView`
```dart
Widget build(BuildContext context) {
return ListView.builder(

    itemBuilder: (context, idx) {
    return ListTile(
        title: Text(lista[idx]),
        tileColor: Colors.deepOrange,
        key: Key(idx.toString()),
        textColor: Colors.white,
        onTap: (){
        print ('OK');
        },
    );
    }, itemCount: lista.length,
    shrinkWrap: true,);
}
```

# Requisição GET

- Importar pacote `http` alterando o arquivo `pubspec.yaml` e clicando em `Pub get`

```yaml
dependencies:
  flutter:
    sdk: flutter
  http:
```
- No arquivo `main.dart` importar o pacote `import 'package:http/http.dart' as http;`

```dart
FormularioPesquisa((pais, universidade) {
    var params = {"contry": pais, "name": universidade};
    print(params);
    var url = Uri.http('universities.hipolabs.com', 'search', params);
    http.get(url,
        headers: <String, String> {'Content-Type' : 'application/json', 'Accept' : 'application/json'}).then((value) {
            print(value);
        });
})
```
- Para trabalhar com *JSON* importar o pacote `import 'dart:convert';`

```dart
jsonDecode(value.body).forEach((item) {
    print(item);
});
```

- Atualizar itens na lista

```dart
jsonDecode(value.body).forEach((item) {
    setState(() {
    lista.add(item['name']);
    });
});
```
