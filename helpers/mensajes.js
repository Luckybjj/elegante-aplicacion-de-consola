require('colors');

const mostrarMenu = () => {

    return new Promise((resolve) => {

        console.clear();
        console.log('============================='.brightRed);
        console.log('    Seleccione una opción'.brightGreen)
        console.log('=============================\n'.brightRed);

        console.log(`${'1.'.brightGreen} Crear tarea`);
        console.log(`${'2.'.brightGreen} Listar tareas`);
        console.log(`${'3.'.brightGreen} Listar tareas completadas`);
        console.log(`${'4.'.brightGreen} Listar tareas pendientes`);
        console.log(`${'5.'.brightGreen} Completar tarea(s)`);
        console.log(`${'6.'.brightGreen} Borrar tarea`);
        console.log(`${'0.'.brightGreen} Salir\n`);

        
        const readLine = require('readline').createInterface({
            input: process.stdin,        
            output: process.stdout
        });

        readLine.question('Seleccione una opción: ', (opt) => {    
           
            readLine.close();       
            resolve(opt)
        });
    });
}

const pausa = () => {

    return new Promise((resolve, reject) => { 

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readLine.question(`\nPresione ${'ENTER'.brightRed} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        })
     });
}

module.exports = {
    mostrarMenu,
    pausa,
}