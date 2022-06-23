// Acá estaran todas las interacciones para guardar y leer el archivo

const fs = require('fs');

const archivo = './db/data.json';

const guardarDB =  ( data ) => {
    // se debe transformar la data que vine como arreglo en un string
    fs.writeFileSync( archivo, JSON.stringify( data ));     
}

const leerDB = () => {

    if (!fs.existsSync(archivo)) {
        
        // verificar si el archivo existe, no existe
        return null;
        
    }

    const info = fs.readFileSync( archivo, { encoding: 'utf-8'} );
    // console.log(info)
    const data = JSON.parse( info );
    
    // console.log(data);

    return data;
}

module.exports = {
    guardarDB,
    leerDB
}