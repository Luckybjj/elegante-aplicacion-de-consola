const { v4: uudiv4 } = require('uuid');

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor ( desc ) {        // el constructor es lo que se va a ejecutar cuando creemos una nueva instancia en nuestra tarea.

        this.id = uudiv4();
        this.desc = desc;           // "this" hace referencia a la instancia de la clase que se esta usando
        this.completadoEn = null;

    }


}
// ¿Cómo puedo manejar una gran cantidad de tareas?
module.exports = Tarea