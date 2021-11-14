const { crearArhivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');
// imprimir la tabla del 5 en consola

console.clear();

//const base = 3;

crearArhivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));



