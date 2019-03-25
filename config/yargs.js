const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Tarea completada o pendiente'
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar elementos', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar elemento por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}