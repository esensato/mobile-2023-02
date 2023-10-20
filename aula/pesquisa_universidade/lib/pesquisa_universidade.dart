import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:pesquisa_universidade/lista_resultado.dart';
import 'formulario_pesquisa.dart';
import 'package:http/http.dart' as http;

class PesquisaUniversidade extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _PesquisaUniversidadeState();

}

class _PesquisaUniversidadeState extends State<PesquisaUniversidade> {

  var valores = [];

  void atualizarResultado(List<dynamic> valores) {
    setState(() {
      this.valores = valores;
    });
    print(this.valores);
  }

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
            final url = Uri.http('universities.hipolabs.com', 'search', {
              "country": pais,
              "name": universidade
            });

            http.get(url).then((value){
              http.Response r = value;
              final resultado = jsonDecode(r.body);
              atualizarResultado(resultado);
            });
          }
          ),
            Expanded(child: ListaResultado(valores: valores,))
          ],
        ),
      ),
    );
  }

}