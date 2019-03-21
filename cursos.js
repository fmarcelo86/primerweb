const fs = require('fs');
var cursos = JSON.parse(fs.readFileSync('datos.json', 'utf8'));
let ejecutarCursos = () => {   
    function buscarCurso(nombres) {
        let response = [];
        nombres.forEach(function (nombre, index) {           
            let curso = cursos.find(itemCurso => itemCurso.nombre == nombre);                       
            response.push(curso);
        });
        return response;
    }
    return buscarCurso(['Angular','Node.JS','Android']);
}
module.exports = { ejecutarCursos };
 
