import commandsDelay from '../Model/Commands';

const dgram = require('dgram');
const wait = require('waiit');

//Datos necesarios para establecer comunicacion con el dron
const PORT = 8889;
const HOST = '192.168.10.1';

//Configuracion de comunicacion de dron 
const drone = dgram.createSocket('udp4');
drone.bind(PORT);

drone.on('message', mensaje => {
    console.log(`Dron dice: ${mensaje}`);
});

const handleError = (err) => {
    if(err) {
        console.log("Error");
        console.log(err);
    }
}

const commands = ['command','battery?','takeoff','land'];

let i = 0;

async function go() {
    const command = commands[i];
    const delay = commandsDelay[command];
    console.log(`Runnig command: ${command}`);
    /* Datos necesarios para activacion del dron.
    1. Comando a utilizar
    2. Offset en el buffer
    3. Cantidad de bytes a enviar (longitud del comando)
    4. Puerto de conexion
    5. Host del dron (IP)
    6. Error si ocurre
    */
    drone.send(command, 0, command.length, PORT, HOST, handleError);

    //Tiempo de espera entre cada comando
    await wait(delay);

    i++;
    if(i < commands.length){
        return go();
    }

    console.log('Hecho!');
}

go();