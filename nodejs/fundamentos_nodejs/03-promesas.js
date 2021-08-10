const empleados = [
    {id:1,nombre:'Miguel'},
    {id:2,nombre:'Maria'},
    {id:3,nombre:'Rosa Mel Ano'}
]
const salarios = [
    {id:1,salario:1000},
    {id:2,salario:2000},    
]
const getEmpleado= (id) =>{
    
    return new Promise((resolve,reject) =>{
        const empleado = empleados.find(e => e.id === id)?.nombre;    

        empleado ? resolve(empleado) : reject(`No existe empleado con el id ${id}`);

        /* if(empleado){
            resolve(empleado)
        }else{
            reject(`No existe empleado con el id ${id}`);
        } */
    });    
}

const getSalario = (id) => {
    return new Promise((resolve,reject) =>{
        salario = salarios.find(e => e.id === id)?.salario;
        salario ? resolve(salario) : reject(`La persona con el id ${id}, no cuenta con salario`);
    });
}

const id=3;

//Promesas en cadena
let nombre;
getEmpleado(id)
    .then(e => {
      nombre = e;
      return getSalario(id); //cuando anidamos promesas si o si se usa return
    })
    .then(s => console.log(`El empleado ${nombre}, tiene un salario de ${s}`))
    .catch(err => console.log(err));


// Hells
/* getEmpleado(id)
    .then(empleado => {
        getSalario(id)
        .then(salario => {
            console.log(`El empleado ${empleado}, tiene un salario de ${salario}`);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
 */
/* getEmpleado(id)
    .then(e => console.log(e))
    .catch( err => console.log(err));
getSalario(id)
    .then( e => console.log(e))
    .catch(err =>  console.log(err)); */