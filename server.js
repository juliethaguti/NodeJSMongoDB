const express = require('express');
const http = require('http');
const port = 3000; //Esta variable se utiliza para crear nuestro servidor y configurar el puerto
const { request, response } = require('express');

//Por medio de requestHandler obtenemos los parametros request y response
// La función requestHandler se ejecutará en cada pedido al server response.end envía la respuesta 'Hello Node.js Server!' al cliente que realizó el llamado HTTP
const requestHandler = ( request, response ) => { 

    console.log(request.url);
    response.end( 'Hello node.js Server!' );
}

//Para crear una instancia de servidor utilizamos createServer
//El método acepta como parámetro una función para manejar pedidos (request) y respuestas (response) al sever.
const server = http.createServer(requestHandler); 

//Le pasa al callback un parámetro con la descripción de error en caso de que exista uno.
//El método lilsten acepta dos parámetros: El puerto a donde va a escuchar y un callback que se ejecutara el terminar de levantar el servidor.
server.listen( port, () => {
    // if (err) {
    //     return console.log( 'something bad happened', err )
    // }

    console.log( `server is listening on ${port}` )
});