
const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify( listadoPorHacer );
    
    fs.writeFile('./db/data.json', data, (err) => {
        if ( err ) throw new Error('No se pudo grabar', err );
    }); 
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch ( err ) {
        listadoPorHacer = [];
    }
    // console.log( listadoPorHacer );
}


const crear = ( descripcion ) => {
 
    cargarDB();
    // este es un objeto
    let porHacer= {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = ( descripcion, completado = true ) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });

    if ( index >= 0 ) {
        listadoPorHacer[ index ].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = ( descripcion ) => {
    cargarDB();

    let borrado = false;
    listadoPorHacer = listadoPorHacer.filter(  tarea => {
        if ( tarea.descripcion === descripcion )
            borrado = true
        return tarea.descripcion !== descripcion
    });
    guardarDB();
    // console.log(listadoPorHacer);
    return borrado;

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}