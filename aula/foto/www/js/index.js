document.addEventListener('deviceready', onDeviceReady, false);

function tirarFoto() {

    navigator.camera.getPicture((imagem) => {
        preview.style.backgroundImage = "url('data:image/jpeg;base64," + imagem + "')";
        cordova.plugin.http.setDataSerializer('json');
        cordova.plugin.http.post('https://pedidos-pizzaria.glitch.me/imagem', {
            imagem: "data:image/jpeg;base64," + imagem
        }, {}, function (response) {
            alert(response.status);
        }, function (response) {
            alert(response.error);
        });

    }, (erro) => {
        alert(erro)
    }, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
}

function onDeviceReady() {
    document.getElementById('tirarfoto').addEventListener('click', tirarFoto);
}
