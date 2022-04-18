const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta) => {

    return new Promise((resolve, reject) => {

        let data = '';
        let salidaConsola = '';

        for (let i = 1; i <= hasta; i++) {
            data += `${ base  } * ${ i } = ${ base  * i }\n`;
            salidaConsola += `${ base  } * ${ i } ${ '='.green } ${ base  * i }\n`;
        }
        if (listar) {
            console.log(salidaConsola);
        }

        fs.writeFile(`tablas/tabla-${ base  }-al-${ hasta }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base  }-al-${ hasta }.txt`);

        });

    });

}

module.exports = {
    crearArchivo
}