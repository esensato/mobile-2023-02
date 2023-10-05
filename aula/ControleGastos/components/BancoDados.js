import * as SQLite from 'expo-sqlite';

const bcodados = SQLite.openDatabase('gastos.db');

export const iniciar = () => {

    console.log('Iniciando conexao')
    const retorno = new Promise((resolve, reject) => {

        bcodados.transaction(
            (tx) => {
                tx.executeSql("CREATE TABLE IF NOT EXISTS gastos (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, descricao TEXT NOT NULL, valor REAL NOT NULL)");
            },
            (err) => {
                reject(err)
            },
            () => {
                resolve("Conexao OK");
            })
    });

    return retorno;

}

export const inserirGasto = (descricao, valor) => {
    const retorno = new Promise((resolve, reject) => {
        bcodados.transaction((tx) => {

            tx.executeSql('INSERT INTO gastos (descricao, valor) VALUES (?, ?)', [descricao, valor]);
        },
            (err) => {
                reject(err)
            },
            () => {
                resolve("Insert OK");
            });
    })
    return retorno;
}

export const listarGastos = () => {
    const retorno = new Promise((resolve, reject) => {

        bcodados.transaction((tx) => {

            tx.executeSql('SELECT * FROM gastos',
                (_, error) => reject(error),
                (_, result) => {
                    resolve(result.rows._array);
                });
        },
            (err) => {
                reject(err)
            },
            () => {
                resolve("Select OK");
            }
        );

    });

    return retorno;
}

