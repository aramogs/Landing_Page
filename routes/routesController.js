//Conexion a base de datos
const controller = {};

//Require Funciones
const funcion = require('../public/js/controllerFunctions');
const funcionE = require('../public/js/empleadosFunctions');

// Index GET
controller.index_GET = (req, res) => {

    funcionE.empleadosDirectorio((err, directorio) => {

        funcion.controllerCargarAnuncios((err, result) => {
            if (err) throw err;


            res.render('index.ejs', {
                data: result, data2: directorio
            });
        });
    });
};

controller.error_GET = (req, res) => {
    
            res.render('404.ejs');
};


//GET Crear Anuncio
controller.alta_anuncio_GET = (req, res) => {
    res.render('login.ejs');

};

//Login
controller.login = (req, res) => {
    loginId = req.params.id

    if (loginId == 'cambiar_directorio') {
        next = '';
    } else {
        next = '/tipo';
    }
    funcionE.empleadosRevisarAccess1((err, result) => {
        res.render('login.ejs', {
            data: loginId, data2: result, data3: next
        });
    });
};


//POST a alta_anuncio despues de login primero revisa si el Gafete existe 
controller.alta_anuncio_tipo_POST = (req, res) => {
    numeroEmpleado = req.body.user;

    funcionE.empleadosNombre(numeroEmpleado, (err, result1) => {
        if (err) throw err;
        //Variables

        nombreEmpleado = result1
        res.render('tipo.ejs', {
            data: { numeroEmpleado, nombreEmpleado }
        });
    });

};

//POST a alta_anuncio despues de login primero revisa si el Gafete existe 
controller.alta_anuncio_anuncio_POST = (req, res) => {
    numeroEmpleado = req.body.gafete;

    funcionE.empleadosNombre(numeroEmpleado, (err, result1) => {
        if (err) throw err;
        //Variables

        nombreEmpleado = result1
        res.render('alta_anuncio.ejs', {
            data: { numeroEmpleado, nombreEmpleado }
        });
    });

};

//POST a alta_anuncio despues de login primero revisa si el Gafete existe 
controller.alta_anuncio_archivo_POST = (req, res) => {
    numeroEmpleado = req.body.gafete;

    funcionE.empleadosNombre(numeroEmpleado, (err, result1) => {
        if (err) throw err;
        //Variables

        nombreEmpleado = result1
        res.render('alta_archivo.ejs', {
            data: { numeroEmpleado, nombreEmpleado }
        });
    });

};

//POST a guardar_orden despues de crear orden2
controller.guardar_anuncio_POST = (req, res) => {
    //Variables
    empleado = (req.body.empleado)
    gafete = (req.body.gafete)
    titulo = (req.body.titulo)
    cuerpo = (req.body.cuerpo)
    fecha = (Date())

    funcion.controllerInsertAnuncio(titulo, cuerpo, gafete, (err, result) => {
        if (err) throw err;
        res.render('guardar_anuncio.ejs', {
            data: { titulo, cuerpo, gafete, fecha }
        });
    });
};

//POST a guardar_orden despues de crear orden2
controller.guardar_archivo_POST = (req, res) => {
    //Variables
    empleado = (req.body.empleado)
    gafete = (req.body.gafete)
    pdf = (req.body.pdf)
    fecha = (Date())

    res.render('guardar_archivo.ejs', {
        data: { gafete, fecha, pdf }


    });
};

//POST a cambiar_directorio
controller.cambiar_directorio_POST = (req, res) => {

    funcionE.empleadosDirectorio((err, result) => {
        res.render('cambiar_directorio.ejs', {
            data2: result
        });
    });
};

controller.cambiar_directorio2_POST = (req, res) => {

extension=req.body.extension2
nombre= req.body.nombre2


//nombre=req.body.nombre
        res.render('cambiar_directorio2.ejs', {
            data: extension, data2: nombre
        });

};

//POST a cambiar_directorio
controller.guardar_directorio_POST = (req, res) => {
    extension = req.body.extension
    nombre = req.body.nombre;

    funcionE.empleadosInsertDirectorio(extension, nombre, (err, result) => {

        res.render('guardar_directorio.ejs', {
            data: { extension, nombre }

        });
    });
};

controller.eliminar_directorio_POST = (req, res) => {
extension= req.body.extension3
    funcionE.empleadosDeleteDirectorio(extension, (err, result) => {
    res.redirect('/login/cambiar_directorio')
    });
};


module.exports = controller;