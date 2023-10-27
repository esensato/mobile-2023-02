import 'package:flutter/material.dart';

class Lista extends StatefulWidget {

  var itens = [];
  Function callback = (){};

  Lista({required this.callback, required this.itens});

  @override
  State<Lista> createState() => _ListaState();
}

class _ListaState extends State<Lista> {

  @override
  Widget build(BuildContext context) {

    return Column(children: [
      ElevatedButton(onPressed: (){}, child: const Text('Atualizar')),
      ListView.builder(itemBuilder: (ctx, idx) {
        return ListTile(
          title: Text('${widget.itens[idx]["username"]}'),
          subtitle: Text('${widget.itens[idx]["valor"]}'),
        );
        },
        itemCount: widget.itens.length,
        shrinkWrap: true,)
    ],
    );

  }

}