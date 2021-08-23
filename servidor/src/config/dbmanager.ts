import { Response } from 'express';
import pool from './dbconn';
import jwt from 'jsonwebtoken';

class DbManager {
  protected static async ejecutarConsulta(sql: string, parametros: any, res: Response, tipo: string): Promise<any> {

    pool.query(sql, parametros, function(error, resultado) {
      if (error) {
        if (error.code == 'ER_PARSE_ERROR') {
          console.log('Esta consumiendo el servicio de manera incorrecta');
          res.status(400).json({ 'respuesta': 'Esta consumiendo el servicio de manera incorrecta' });
        }
        console.log('Se ha encontrado un error: ', error);
        //res.status(400).json({ 'respuesta': error });
      } else {
        switch (tipo.toLowerCase()) {
          case 'select':
            res.status(200).json(resultado);
            break;
          case 'insert':
            res.status(200).json({
              'mensaje': 'Registro creado',
              'id': resultado.insertId
            });
            break;
          case 'delete':
            res.status(200).json({
              'mensaje': 'Registro eliminado',
              'filas': resultado.affectedRows
            });
            break;
          case 'update':
            if (resultado.affectedRows > 0) {
              res.status(200).json({
                'mensaje': 'Registro actualizado',
                'id': resultado.affectedRows
              });
            } else {
              res.status(400).json({
                'mensaje': 'Registro no encontrado'
              })
            }
            break;

          case 'insertuser':
            const token = jwt.sign({
              'id': resultado.insertId,
              'correo': parametros.correo
            }, 'alvaroelbarvaro');//alvaroelbarvaro es mi llave privada
            res.status(200).json({
              'token': token
            });
            break;
          default:
            res.status(400).json({
              'respuesta': 'Servicio no implementado :C'
            });
            break;
        }
      }
    });
  }
}

export default DbManager;
