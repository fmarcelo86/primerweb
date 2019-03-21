const fs = require('fs');
var cursos = JSON.parse(fs.readFileSync('datos.json', 'utf8'));

let ejecutarMatricula = (params) => {
    function mostrarCursos() {
        var msg = '<p>Ha ingresado un ID que no corresponde a ningún curso</p>';
        cursos.forEach(function (curso, index) {            
            msg += '<p>El ID es <b>' + curso.id + '</b> el curso se llama <b>' + curso.nombre + '</b> tiene una duración de <b>' + curso.duracion + '</b> horas y un valor de <b>' + curso.valor + '</b> pesos</p>';
        });
        return msg;
    }
    let prematricula = () => {
        let curso = cursos.find(itemCurso => itemCurso.id == params.id);
        if(curso == null) {          
            return mostrarCursos();
        }
        var texto = '<p>El estudiante ' + params.nombre + '<br/>' +
                'con cedula ' + params.cedula + '<br/>' +
                'Se ha matriculado en el curso llamadao ' + curso.nombre + '<br/>' +
                'tiene una duración de ' + curso.duracion + ' y un valor de ' + curso.valor + '</b>';
        return texto;  
    }
    return prematricula();
}
module.exports = { ejecutarMatricula };
 
