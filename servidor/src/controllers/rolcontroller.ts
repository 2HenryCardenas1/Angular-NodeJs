import { Request, Response } from 'express';
import DbManager from '../config/dbmanager';

class RolController extends DbManager {

  public obtenerRoles(req: Request, res: Response): Promise<any> {
    const sql: string = 'SELECT codrol , nombrerol FROM rol';
    return RolController.ejecutarConsulta(sql, req, res, 'SELECT');
  }

  public crearRol(req: Request, res: Response): Promise<any> {
    console.log(req.body);
    //const sql: string = 'INSERT INTO rol( nombrerol ) VALUES (req)';
    const sql: string = 'INSERT INTO rol set ?';
    return RolController.ejecutarConsulta(sql, req.body, res, 'INSERT');
  }

  public borrarRol(req: Request, res: Response): Promise<any> {
    if (!isNaN(Number(req.params.codRol))) {
      const codigo = Number(req.params.codRol);
      const sql: string = 'DELETE FROM rol WHERE codrol = ?';
      return RolController.ejecutarConsulta(sql, codigo, res, 'DELETE');
    } else {
      return Promise.resolve(res.status(400).json({
        'mensaje': 'Codigo invalido'
      }));
    }
  }

  public actualizarRol(req: Request, res: Response): Promise<any> {
    if (!isNaN(Number(req.params.codRol))) {
      const codigo = Number(req.params.codRol);
      delete req.body.codRol;
      const sql: string = 'UPDATE rol SET ? WHERE codrol =?';
      const parametros = [req.body, codigo];
      return RolController.ejecutarConsulta(sql, parametros, res, 'UPDATE');
    }
    return Promise.resolve(res.status(400).json({
      'mensaje': 'Codigo inválido'
    }))
  }
}

const rolController = new RolController();
export default rolController;
