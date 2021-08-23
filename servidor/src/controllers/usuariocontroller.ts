import { Request, Response } from 'express';
import DbManager from '../config/dbmanager';

class UsuarioController extends DbManager{

  public obtenerUsuarios(req: Request, res: Response):Promise<any>{
    const sql: string='SELECT codusuario , codrol, correo, clave FROM usuario';
    return UsuarioController.ejecutarConsulta(sql,req,res,'SELECT');
  }

  public crearUsuario(req: Request, res: Response): Promise<any> {
    delete req.body.token;
    const sql: string = 'INSERT INTO usuario set ?';
    return UsuarioController.ejecutarConsulta(sql, req.body, res, 'INSERTUSER');
  }

  public borrarUusuario(req: Request, res: Response): Promise<any> {
    if (!isNaN(Number(req.params.codUsu))) {
      const codigo = Number(req.params.codUsu);
      const sql: string = 'DELETE FROM usuario WHERE codusuario = ?';
      return UsuarioController.ejecutarConsulta(sql, codigo, res, 'DELETE');
    } else {
      return Promise.resolve(res.status(400).json({
        'mensaje': 'Codigo invalido'
      }));
    }
  }
  public actualizarUsuario(req: Request, res: Response): Promise<any> {
    if (!isNaN(Number(req.params.codUsu))) {
      const codigo = Number(req.params.codUsu);
      delete req.body.codUsu;
      const sql: string = 'UPDATE usuario SET ? WHERE codusuario =?';
      const parametros = [req.body, codigo];
      return UsuarioController.ejecutarConsulta(sql, parametros, res, 'UPDATE');
    }
    return Promise.resolve(res.status(400).json({
      'mensaje': 'Codigo inválido'
    }))
  }
}


const usuarioController = new UsuarioController();
export default usuarioController;
