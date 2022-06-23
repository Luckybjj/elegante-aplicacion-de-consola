const Tarea = require('./tarea');       // inportacion del modelo de tarea

class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = [];
        // Hay que barrer cada una de las llaves, porque cada una es una tarea a realizar
        //  Object.keys() extrae cada una de las llaves que se encuentren en un objeto
        // esto me va a regresar un "arreglo" de todas las llaves

        Object.keys(this._listado).forEach(key => {
            // console.log(key);
            // Insertar las tareas al listado
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    // borrar la propiedad del objeto
    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });

    }

    // Recibir la descripción de la tarea
    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        // almacenar la tarea en el listado, como es un objeto basta con ingresar una nueva propiedad
        this._listado[tarea.id] = tarea;
    }

    // 
    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, i) => {

            const idx = `${i + 1}`.green;
            // console.log(idx)
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red
            console.log(`${idx} ${desc} :: ${estado}`);
        });
    }

    listarPendientesCompletadas(completadas = true) {

        console.log()
        let contador = 0;
        this.listadoArr.forEach(tarea => {
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red
            if (completadas) {
                // mostrar completadas
                if (completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${completadoEn.green}`);
                }
            } else {
                // mostrar pendientes
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
                }

            }
        })

    }

    toggleCompletadas(ids = []) {

        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()

            }
        });

        this.listadoArr.forEach(tarea => {

            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;

            }
        });
    }
}



module.exports = Tareas