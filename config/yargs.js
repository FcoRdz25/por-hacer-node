
const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer.',{
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        describe: 'Nombre de la Tarea por hacer.'
                    }
                })
                .command('actualizar', 'Actualiza el estado de una tarea a completado.', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        describe: 'Nombre de la Tarea que se desea actualizar.'
                    },
                    completado: {
                        default: true,
                        alias: 'c',
                        describe: 'Se desea marcar como completada esta tarea?'
                    }
                })
                .command('borrar', 'Borra un elemento por hacer.',{
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        describe: 'Nombre de la Tarea a borrar.'
                    }
                })

                .help()
                .argv;

                
module.exports = {
    argv
}
