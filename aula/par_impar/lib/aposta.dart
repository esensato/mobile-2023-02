import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class Aposta extends StatefulWidget {

  Function callback = (){};

  Aposta({required this.callback});

  @override
  State<Aposta> createState() => _ApostaState();
}

class _ApostaState extends State<Aposta> {

  var numero = 1.0;
  var aposta = 10.0;
  var parImpar = 0;
  TextEditingController username = TextEditingController();

  @override
  Widget build(BuildContext context) {
      return Form(child: Column(children: [
                TextFormField(controller: username, decoration: const InputDecoration(
                    label: Text('Nome do Usuário'),
                    border: OutlineInputBorder()
                ),
                ),
                Text('Aposta: ${aposta.toInt()}'),
                Slider(value: aposta, min: 10, max: 1000, divisions: 10, onChanged: (valor){
                    setState(() {
                      aposta = valor;
                    });
                }),
                Row(mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                  Radio(value: 1, groupValue: parImpar, onChanged: (valor){
                    setState(() {
                      if (valor != null) {
                        parImpar = valor;
                      }
                    });
                  }),
                  const Text('Ímpar'),
                  Radio(value: 2, groupValue: parImpar, onChanged: (valor){
                    setState(() {
                      if (valor != null) {
                        parImpar = valor;
                      }
                    });
                  }),
                  const Text('Par'),

                ],),
                Text('Número: ${numero.toInt()}'),
                Slider(value: numero, min: 1, max: 5,onChanged: (valor) {
                  setState(() {
                    numero = valor;
                  });
                }),
                ElevatedButton(onPressed: (){
                  widget.callback(username.text, aposta, numero, parImpar);
                }, child: const Text('Apostar!'))
            ],
        )
      );
  }

}