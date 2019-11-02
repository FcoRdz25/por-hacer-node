
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

// console.log( argv );
let comando = argv._[0];
console.log( 'comando: ', comando  );

switch( comando ) {

    case 'crear':
        // console.log(`Crear la tarea: ${ argv.descripcion }` );
        let tarea = porHacer.crear( argv.descripcion );
        console.log('tarea: ', tarea );
        break;
    
    case 'listar':
        // console.log('Mostrar todas las tarear por hacer');
        let listado = porHacer.getListado();
        for ( let tarea of listado ) {
            console.log('======Por Hacer======'.green );
            console.log( 'Tarea: ', tarea.descripcion );
            // console.log( 'Estado: ', tarea.completado );
            if (  tarea.completado === "true" ||  tarea.completado === true  ) 
                console.log('Estado:', 'Terminada'.yellow  );
            else 
                console.log('Estado:', 'por hacer'.red  );
            console.log('======================'.green);
        }
        break;
    
    case 'actualizar':
        // console.log( `Actualiza la tarea ${argv.descripcion} y completada: ${ argv.completado} `);
        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );

        if ( !actualizado ) 
            console.log(`No se actualizo la tarea: ${argv.descripcion}`);
        else 
            console.log(`Tarea: ${argv.descripcion} actualizada a: ${ argv.completado}` );
        break;

    case 'borrar':
        let borrado = porHacer.borrar( argv.descripcion );
        if ( !borrado ) 
            console.log( `No pudo borrar esa tarea: ${ argv.descripcion }`.red );
        else
            console.log( `Se borro la tarea: ${ argv.descripcion }`.green );
        break

    default:
        console.log('Comando no conocido!');
}

