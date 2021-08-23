
import {Router} from 'express';
import usuarioController from '../controllers/usuariocontroller';

class UsuarioRoutes{
  public router: Router;

  constructor(){
    this.router=Router();
    this.config();
  }

  public config():void{
    this.router.get('/', usuarioController.obtenerUsuarios);
    this.router.post('/crear', usuarioController.crearUsuario);
    this.router.delete('/:codUsu',usuarioController.borrarUusuario);
    this.router.put('/editar/:codUsu', usuarioController.actualizarUsuario)
  }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;
