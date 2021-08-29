const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors');
/* const { mostrarMenu, pausa } = require('./helpers/mensajes'); */


console.clear();

const main = async()=>{    

    let op = '';
    const tareas = new Tareas();

    do{
        //imprimir el menu
        op = await inquirerMenu(); 
        /* console.log({op});  */
        switch(op){
            case '1':
                //creando opcion
                const desc = await leerInput('Descripcion : ');
                /* console.log(desc); */
                tareas.crearTarea( desc );
                break;
            case '2':
                /* console.log( tareas._listado ); */
                console.log(tareas.listadoArr);
                break;
        }


        /* (op !== '0') ? await pausa() : console.log(); */
        await pausa();

    }while( op !== '0');
    
    /* pausa(); */
}
main(); 