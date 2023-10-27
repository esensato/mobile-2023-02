import 'package:flutter/material.dart';
import 'package:par_impar/aposta.dart';
import 'package:par_impar/lista.dart';
import 'package:par_impar/resultado.dart';

class TelaPrincipal extends StatefulWidget {
  @override
  State<TelaPrincipal> createState() => _TelaPrincipalState();
}

class _TelaPrincipalState extends State<TelaPrincipal> {

  var itens = [{'username': 'edson', 'valor': 100},
              {'username': 'joao', 'valor': 300}];

  var exibirTela = 1;
  var aposta;
  var lista;
  var resultado = Resultado();

  @override
  void initState() {
    lista = Lista(callback: (){}, itens: itens,);
    aposta = Aposta(callback: (username, aposta, numero, parImpar){
      setState(() {
        itens.add({'username': username, 'valor': aposta});
        exibirTela = 2;
      });
    });
    super.initState();
  }

  Widget selecionaTela() {
    if (exibirTela == 1) {
      return aposta;
    } else if (exibirTela == 2){
      return lista;
    } else {
      return resultado;
    }
  }

  @override
  Widget build(BuildContext context) {
    return selecionaTela();
  }
  
}