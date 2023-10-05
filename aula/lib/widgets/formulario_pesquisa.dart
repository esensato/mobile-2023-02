import 'package:flutter/material.dart';

class FormularioPesquisa extends StatelessWidget{

  final pais = TextEditingController();
  final universidade = TextEditingController();
  Function callback;

  FormularioPesquisa(this.callback, {super.key});

  Widget buildTextFormField({label = "", controller}) {
    return Padding(padding: const EdgeInsets.all(10.0),
      child: TextFormField(  decoration: InputDecoration(
        border: const UnderlineInputBorder(),
        labelText: label,
      ),
          controller: controller
      ),
    );
  }

  @override
  Widget build(BuildContext context) {

    final formKey = GlobalKey<FormState>();
    return Form(
      key: formKey,
      child:  Column(
        children: <Widget>[
          buildTextFormField(label: 'Nome do país', controller: pais),
          buildTextFormField(label: 'Nome da Universidade', controller: universidade),
          ElevatedButton(child: const Text('Submit'), onPressed: () => callback(pais.text, universidade.text)),
        ],
      ),
    );
  }

}