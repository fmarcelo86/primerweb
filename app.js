var express = require('express');
var path = require('path');
var app = express();
 
app.use(express.static(path.join(__dirname, 'public')));
var principal = require('./routes/principal');

app.use('/principal', principal);
app.get('/cursos', function (req, res) {
    const {ejecutarCursos} = require('./cursos');
    res.send(ejecutarCursos());
});
app.get('/principal/inscribir/:id/:nombre/:cedula', function (req, res) {
    let params = {id:req.params.id, nombre:req.params.nombre, cedula:req.params.cedula};
    const {ejecutarMatricula} = require('./matricula');
    res.send(ejecutarMatricula(params));
});
app.listen(3000);
console.log('Escuchando por el puerto 3000');