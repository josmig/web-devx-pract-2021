const { inquirerMenu, pausa } = require('./helpers/inquirer');

require('colors');
/* const { mostrarMenu, pausa } = require('./helpers/mensajes'); */


console.clear();

const main = async()=>{    

    let op = '';
    do{
        op = await inquirerMenu(); 
        console.log({op}); 

        /* (op !== '0') ? await pausa() : console.log(); */
        await pausa();

    }while( op !== '0');
    
    /* pausa(); */
}
main();