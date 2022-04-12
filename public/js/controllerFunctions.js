const funcion = {};
const express = require('express');
const app = express();


const db = require('../db/conn');

const dbP = require('../db/connP');



funcion.controllerIdDepartamento=(departamento,callback)=>{
    db.query(`SELECT id_departamento FROM departamento WHERE nombre='${departamento}'`, function (err, result, fields) {
        if (err) {
            callback (err,null);
        }else{
            
        callback (null,result[0].id_departamento);
        }
    })

}


funcion.controllerInsertAnuncio=(titulo,cuerpo,gafete,callback)=>{
    db.query(`
    INSERT INTO anuncios (an_titulo, an_anuncio, an_usuario, an_fecha) 
    VALUES ("${titulo}","${cuerpo}","${gafete}",NOW())
    `,
     function (err, result, fields) {
        if (err) {
            callback (err,null);
        }else{

        callback (null,result);
        }
    })

}

funcion.controllerInsertArchivo=(pdf,gafete,callback)=>{
    db.query(`
    UPDATE archivos 
    SET ar_archivo = "${pdf}", 
    ar_usuario = "${gafete}",
     ar_fecha = NOW()
    `,
     function (err, result, fields) {
        if (err) {
            callback (err,null);
        }else{

        callback (null,result);
        }
    })

}

funcion.controllerCargarAnuncios=(callback)=>{
    db.query(`SELECT * FROM anuncios ORDER BY an_id DESC`, function (err, result, fields) {
        if (err) {
            callback (err,null);
        }else{

        callback (null,result);
        }
    })

}


funcion.reporte_comedor = (week_start,week_end) => {
    return new Promise((resolve, reject) => {
        dbP(`
        SELECT 
            *
        FROM
            del_comedor
       
            WHERE 
            (checador_fecha BETWEEN  "${week_start}" AND "${week_end}")
        `)
            .then((result) => { resolve(result) })
            .catch((error) => { reject(error) })
    })
}


module.exports = funcion;