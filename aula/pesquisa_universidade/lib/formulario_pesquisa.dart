import 'package:flutter/material.dart';

class FormularioPesquisa extends StatelessWidget {

  final pais = TextEditingController();
  final universidade = TextEditingController();
  Function callback;

  FormularioPesquisa(this.callback);

  Widget criarTextFormField({label = "", controller}) {
    return 
      Padding(padding: const EdgeInsets.all(10.0),
      child: TextFormField(decoration: InputDecoration(
          label: Text(label),
          border: const OutlineInputBorder()
      ),
        controller: controller,
      )
      );

  }

  @override
  Widget build(BuildContext context) {

    return Form(
      child: Column(
          children: [
            criarTextFormField(label:"Nome do País", controller: pais),
            criarTextFormField(label: "Nome da Universidade", controller: universidade),
            FilledButton(onPressed: (){
              callback(pais.text, universidade.text);
            },
                child: const Text("Efetuar Pesquisa")
            )
          ],
      ),
    );

  }

}