let tareas = require('./funcionesDeTareas');
let process = require('process');
let [ , , arg3, arg4, arg5] = process.argv;

switch (arg3) {
    case 'listar':
        console.log(tareas.leerJson());
        break;
    
    case 'agregar':
        tareas.nuevaTarea(arg4, arg5);
    break;

    case 'filtrar':
        let estado = arg4;
        let filtro = tareas.filtrarPorEstado(estado);
        filtro.forEach(tarea => console.log(tarea));
    break;

    case undefined:
        console.log('Atención - Tienes que pasar una acción')
        break;

    default:
        console.log('No entiendo que quieres hacer');
        break;
}