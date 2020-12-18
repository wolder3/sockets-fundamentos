const { io } = require("../server");

io.on("connection", (client) => {
    console.log("Usuario conectado");

    client.emit("enviarMensaje", {
        usuario: "Admin",
        mensaje: "Bienvienido a esta aplicacion",
    });

    client.on("disconnect", () => {
        console.log("Usuario desconectado");
    });

    // Escuchar el cliente
    client.on("enviarMensaje", (data, callback) => {
        console.log(data);

        client.broadcast.emit("enviarMensaje", data);

        // if (mensaje.usuario)
        //     callback({
        //         resp: "Todo salio bien",
        //     });
        // else
        //     callback({
        //         resp: "Todo va a salir mal",
        //     });
    });
});