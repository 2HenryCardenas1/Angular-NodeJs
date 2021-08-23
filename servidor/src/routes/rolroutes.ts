import { Router } from 'express';
import rolController from '../controllers/rolcontroller';

class RolRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  public config(): void {
    this.router.get('/', rolController.obtenerRoles);
    this.router.post('/crear', rolController.crearRol);
    this.router.delete('/:codRol',rolController.borrarRol);
    this.router.put('/editar/:codRol', rolController.actualizarRol)
  }
}

const rolRoutes = new RolRoutes();
export default rolRoutes.router;
