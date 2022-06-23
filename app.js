require('colors');
const { guardarDB, leerDB } = require('./helpers/guardaArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheaklist } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


console.clear()

const main = async () => {

    let opt = '';
    // nueva instancia de las tareas
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {     // establecer las tareas

        tareas.cargarTareasFromArray(tareasDB)

    }

    do {

        opt = await inquirerMenu();     // Imprime el menú y retorna una opción

        // para listar las tareas y generar las opciones ocuparemos
        switch (opt) {
            case '1':
                // crear opcion 
                const desc = await leerInput('Descripción: ');
                // console.log(desc);
                tareas.crearTarea(desc);
                break;

            case '2':
                // como listo las tareas?? llamando a crearTarea()
                // console.log( tareas.listadoArr );
                tareas.listadoCompleto();
                break;

            case '3': // listar completadas
                tareas.listarPendientesCompletadas(true);
                break


            case '4': // listar pendientes
                tareas.listarPendientesCompletadas(false);
                break;

            case '5': // Completado | Pendiente
                const ids = await mostrarListadoCheaklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;



            case '6': // Borrar
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro?')
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada');
                    }
                }
                break;

        }

        // se guarda un arreglo con las tareas
        guardarDB(tareas.listadoArr);


        await pausa();

    } while (opt !== '0');

}

main();