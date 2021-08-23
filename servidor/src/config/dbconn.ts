import variable from './configdb';
import mysql from 'mysql';

const pool = mysql.createPool(variable.database);
//usar el pool de coneccion
pool.getConnection(function(err, conn) {
  if (err) {
    //console.log('El codigo del error es: ',err.code);
    if (err.code == 'ER_BAD_DB_ERROR') {
      console.log('No existe la database ', variable.database.database, ' ', err.code);
    }
    if (err.code == 'ER_ACCESS_DENIED_ERROR') {
      console.log('Nombre de usuario o contraseña es incorrecta');
    }
    if (err.code == 'ENOTFOUND') {
      console.log('Error servidor');
    }
  }
  else {
    if (conn) {
      conn.release();
    }
    console.log('Coneccion establecidad con: ', variable.database.database);
  }
});

export default pool;
