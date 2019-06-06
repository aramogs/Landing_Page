//Conexion a base de datos
const controller = {};

//Require Funciones
const funcion = require('./public/js/controllerFunctions');
const funcionE = require('./public/js/empleadosFunctions');

// Index GET
controller.index_GET = (req, res) => {

    funcion.controllerCargarAnuncios((err, result) => {
        if (err) throw err;


            res.render('index.ejs', {
                data: result
            });
        });
};


//GET Crear Anuncio
controller.alta_anuncio_GET = (req, res) => {
    res.render('login.ejs');

};

//Login
controller.login = (req, res) => {
    loginId = req.params.id
    res.render('login.ejs', {
        data: loginId
    });
};


//POST a alta_anuncio despues de login primero revisa si el Gafete existe 
controller.alta_anuncio_tipo_POST = (req, res) => {
    numeroEmpleado = req.body.user;
    
    funcionE.empleadosRevisarAccess1(numeroEmpleado, (err, count) => {
        if (err) {
            res.redirect('/login/alta_anuncio')
        } else {
            if (count == 0) {
                res.redirect('/login/alta_anuncio')
            }
            else {
                funcionE.empleadosNombre(numeroEmpleado, (err, result1) => {
                    if (err) throw err;
                    //Variables

                    nombreEmpleado = result1
                    res.render('tipo.ejs', {
                        data: { numeroEmpleado, nombreEmpleado }
                    });
                });
            }
        }
    });
};

//POST a alta_anuncio despues de login primero revisa si el Gafete existe 
controller.alta_anuncio_anuncio_POST = (req, res) => {
    numeroEmpleado = req.body.gafete;
    funcionE.empleadosRevisarAccess1(numeroEmpleado, (err, count) => {
        if (err) {
            res.redirect('/login/alta_anuncio')
        } else {
            if (count == 0) {
                res.redirect('/login/alta_anuncio')
            }
            else {
                funcionE.empleadosNombre(numeroEmpleado, (err, result1) => {
                    if (err) throw err;
                    //Variables

                    nombreEmpleado = result1
                    res.render('alta_anuncio.ejs', {
                        data: { numeroEmpleado, nombreEmpleado }
                    });
                });
            }
        }
    });
};

//POST a alta_anuncio despues de login primero revisa si el Gafete existe 
controller.alta_anuncio_archivo_POST = (req, res) => {
    numeroEmpleado = req.body.gafete;
    funcionE.empleadosRevisarAccess1(numeroEmpleado, (err, count) => {
        if (err) {
            res.redirect('/login/alta_anuncio')
        } else {
            if (count == 0) {
                res.redirect('/login/alta_anuncio')
            }
            else {
                funcionE.empleadosNombre(numeroEmpleado, (err, result1) => {
                    if (err) throw err;
                    //Variables

                    nombreEmpleado = result1
                    res.render('alta_archivo.ejs', {
                        data: { numeroEmpleado, nombreEmpleado }
                    });
                });
            }
        }
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
            data: {  gafete, fecha, pdf }
         
            
        });
    };
    

module.exports = controller;