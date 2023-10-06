import 'package:flutter/material.dart';

class TelaPrincipal extends StatelessWidget{

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Pesquisa Universidade",
      home: _TelaPrincipalStateful()
    );
  }
} // TelaPrincipal

class _TelaPrincipalStateful extends StatefulWidget {

  @override
  State<_TelaPrincipalStateful> createState() => _TelaPrincipalState();
  // Igual a { return _TelaPrincipalState(); }

} // _TelaPrincipalStateful

class _TelaPrincipalState extends State<_TelaPrincipalStateful> {

  var valor = 0;

  @override
  Widget build(BuildContext context) {
    return telaPrincipal();
  }

  Widget telaPrincipal() {

    return Scaffold(
      appBar: AppBar(
        title: const Text("Pesquisa Universidade"),
        leading: const Icon(Icons.account_balance_rounded),
      ),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: (){
          setState(() {
            valor++;
          });
        },
      ),
      body: Center(
        child: Text('Valor atual: $valor',
          style: const TextStyle(color: Colors.blue,
              fontSize: 30),
        ),
      ),
    );
  }
} // _TelaPrincipalState