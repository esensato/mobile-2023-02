import 'package:flutter/material.dart';

class ListaResultado extends StatelessWidget {

  var valores = [];

  ListaResultado({required this.valores});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(itemBuilder: (ctx, idx) {
        return ListTile(leading: IconButton(onPressed: (){},
            icon: const Icon(Icons.account_balance)),
        title: Text(valores[idx]['name']),
        subtitle: Text(valores[idx]['web_pages'][0]),);
    },
    itemCount: valores.length,
    shrinkWrap: true,);
  }
  
}