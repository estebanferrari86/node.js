const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 5
    })
    .command('listar', 'Imprime en consola la tabla de multiplicar')
    .command('base', 'Numero base a multiplicar')
    .command('hasta', 'Numero hasta el que llega la multiplicacion')
    .help()
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;
console.log(argv);


module.exports = argv;