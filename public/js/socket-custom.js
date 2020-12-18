var socket = io();

socket.on("connect", function() {
    console.log("Conectado al servidor");
});

//Escuchar
socket.on("disconnect", function() {
    console.log("Perdimos conexion con el servidor");
});

//Enviar informacion
socket.emit(
    "enviarMensaje", {
        usuario: "Walther",
        mensaje: "Hola mundo",
    },
    function(response) {
        console.log("respuesta server:", response);
    }
);

//Escuchar informacion
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor", mensaje);
});