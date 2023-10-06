import 'package:flutter/material.dart';
import 'formulario_pesquisa.dart';

class PesquisaUniversidade extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Pesquisa Universidade"),
          leading: const Icon(Icons.book),
        ),
        body: Column(
          children: [FormularioPesquisa((pais, universidade) {
            print ('Selecionados: $pais - $universidade');
          })],
        ),
      ),
    );
  }

}