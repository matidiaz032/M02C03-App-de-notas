let fs = require('fs');

module.exports = moduloTareas = {
    archivo: './tareas.json',
    leerJson: () => JSON.parse(fs.readFileSync('tareas.json', 'utf-8')),
    escribirJson: info => {
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8');
    },
    nuevaTarea: (titulo, estado) => {
        let tareas = moduloTareas.leerJson();

        let nuevaTarea = {
            titulo,
            estado
        }

        tareas.push(nuevaTarea);
        moduloTareas.escribirJson(tareas);
    }
}