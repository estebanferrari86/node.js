const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');



crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(`Archivo ${ archivo.rainbow } creado: `))
    .catch(e => console.log(e));