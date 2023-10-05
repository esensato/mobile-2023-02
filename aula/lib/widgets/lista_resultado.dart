import 'package:flutter/material.dart';

class ListaResultado extends StatelessWidget{

  var lista = [];
  Function callback;

  ListaResultado(this.lista, this.callback);

  @override
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

}