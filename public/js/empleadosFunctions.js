const funcionE = {};
const dbE = require('../db/connEmpleados');
const db = require('../db/conn');


funcionE.empleadosNombre=(gafete,callback)=>{
    dbE.query(`SELECT emp_nombre FROM del_empleados WHERE emp_id=${gafete}`, function (err, result, fields) {
        if (err) {
            callback (err,null);
        }else{
            
        callback (null,result[0].emp_nombre);
        }
    })

}


funcionE.empleadosRevisarAccess1= (numeroEmpleado, callback)=>{

    dbE.query(`SELECT COUNT( * ) AS count FROM del_accesos WHERE acc_id=${numeroEmpleado} AND del_anuncios = 1` , function (err, result, fields) {
        if (err) {
            console.log(err);
            
            callback (err,null);
        }else{

        callback (null,result[0].count);
        }
    })

}


module.exports = funcionE;