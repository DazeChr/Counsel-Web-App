const mysql = require('mysql');

//Connection Pool
const pool = mysql.createPool({
    connectionLimit : 100,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME 
});
    
//Ver usuarios
exports.view = (req, res) =>{
    pool.getConnection((err, connection) => {
        if(err) throw err; //not connected lol!
        console.log('Connected as ID' + connection.threadId);

        //User the connection
        connection.query('SELECT * FROM USUARIOS WHERE status_usuario = "Activo"', (err, rows) => {
            //When done with the connection, release it
            connection.release();

            if(!err){
                let deletedUsuario = req.query.deletedUsuario;
                res.render('index', {rows, deletedUsuario});
            }else{
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
};

//Encontrar al usuario a traves de "Buscar"
exports.find = (req, res) =>{
    pool.getConnection((err, connection) => {
        if(err) throw err; //not connected lol!
        console.log('Connected as ID' + connection.threadId);

        let searchTerm = req.body.search;
        
        //User the connection
        connection.query('SELECT * FROM USUARIOS WHERE nombre_usuario LIKE ? OR apellido_usuario LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
            //When done with the connection, release it
            connection.release();

            if(!err){
                res.render('index', {rows});
            }else{
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}

//Visualizar datos del usuarios
exports.viewall = (req, res) =>{
    pool.getConnection((err, connection) => {
        if(err) throw err; //not connected lol!
        console.log('Connected as ID' + connection.threadId);

        //User the connection
        connection.query('SELECT * FROM USUARIOS WHERE id_usuario = ?', [req.params.id], (err, rows) => {
            //When done with the connection, release it
            connection.release();

            if(!err){
                res.render('view-usuario', {rows});
            }else{
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
};

//Renderizar el form
exports.form = (req, res) =>{
    res.render('add-usuario');
}

//Agregar un nuevo usuario
exports.create = (req, res) =>{
    const {
      nombre_usuario,
      apellido_usuario,
      correo_usuario,
      telefono_usuario,
      cel_familiar_usuario,
      direccion_usuario,
      clave_usuario,
      conducta_usuario,
      anotaciones_generales_usuario,
      status_usuario,
    } = req.body;

    pool.getConnection((err, connection) => {
        if(err) throw err; //not connected lol!
        console.log('Connected as ID' + connection.threadId);

        let searchTerm = req.body.search;
        
        //User the connection
        connection.query('INSERT INTO USUARIOS SET nombre_usuario = ?, apellido_usuario = ?, correo_usuario = ?, telefono_usuario = ?, cel_familiar_usuario = ?, direccion_usuario = ?, clave_usuario = ?, conducta_usuario = ?, anotaciones_generales_usuario = ?, status_usuario = ?'
            ,[nombre_usuario, apellido_usuario, correo_usuario,telefono_usuario,cel_familiar_usuario, direccion_usuario, clave_usuario, conducta_usuario, anotaciones_generales_usuario, status_usuario] 
            ,(err, rows) => {
            //When done with the connection, release it
            connection.release();

            if(!err){
                res.render('add-usuario', {alert: 'Usuario agregado exitosamente.'});
            }else{
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}

//Editar informacion del Usuario
exports.edit = (req, res) =>{
    pool.getConnection((err, connection) => {
        if(err) throw err; //not connected lol!
        console.log('Connected as ID' + connection.threadId);

        //User the connection
        connection.query('SELECT * FROM USUARIOS WHERE id_usuario = ?',[req.params.id], (err, rows) => {
            //When done with the connection, release it
            connection.release();

            if(!err){
                res.render('edit-usuario', {rows});
            }else{
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}

//Actualizar informacion del Usuario
exports.update = (req, res) =>{
    const {
       nombre_usuario,
       apellido_usuario,
       correo_usuario,
       telefono_usuario,
       cel_familiar_usuario,
       direccion_usuario,
       clave_usuario,
       conducta_usuario,
       anotaciones_generales_usuario,
       status_usuario,
    } = req.body;
  
    pool.getConnection((err, connection) => {
        if(err) throw err; //not connected lol!
        console.log('Connected as ID' + connection.threadId);

        //User the connection
        connection.query('UPDATE USUARIOS set nombre_usuario = ?, apellido_usuario = ?, correo_usuario = ?, telefono_usuario = ?, cel_familiar_usuario = ?, direccion_usuario = ?, clave_usuario = ?, conducta_usuario = ?, anotaciones_generales_usuario = ?, status_usuario = ? WHERE id_usuario = ? ',
            [nombre_usuario, apellido_usuario, correo_usuario,telefono_usuario,cel_familiar_usuario, direccion_usuario, clave_usuario, conducta_usuario, anotaciones_generales_usuario, status_usuario, req.params.id], (err, rows) => {
            //When done with the connection, release it
            connection.release();

            if(!err){
                pool.getConnection((err, connection) => {
                    if(err) throw err; //not connected lol!
                    console.log('Connected as ID' + connection.threadId);
            
                    //User the connection
                    connection.query('SELECT * FROM USUARIOS WHERE id_usuario = ?',[req.params.id], (err, rows) => {
                        //When done with the connection, release it
                        connection.release();
            
                        if(!err){
                            res.render('edit-usuario', {rows, alert: `Informacion del usuario "${req.params.id}" actualizada exitosamente.`});
                        }else{
                            console.log(err);
                        }
                        console.log('The data from user table: \n', rows);
                    });
                });
            }else{
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}

//Borrar a un usuario de la base de datos
exports.delete = (req, res) =>{
    pool.getConnection((err, connection) => {
        if(err) throw err; //not connected lol!
        console.log('Connected as ID' + connection.threadId);

        //User the connection
        connection.query('DELETE FROM USUARIOS WHERE id_usuario = ?',[req.params.id], (err, rows) => {
            //When done with the connection, release it
            connection.release();

            if(!err){
                let deletedUsuario = encodeURIComponent("Usuario Eliminado Exitosamente");
                res.redirect('/?deletedUsuario=' + deletedUsuario);
            }else{
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}


