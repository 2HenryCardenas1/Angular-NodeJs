import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import indexRoutes from './routes/indexroutes';
import rolRoutes from './routes/rolroutes';
import usuarioRoutes from './routes/usuarioroutes';

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  public config(): void {
    this.app.set('PORT', process.env.PORT || 8099);
    //Obligatorio
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  //Creacion de rutas
  public routes():void{
    this.app.use('/',indexRoutes);
    this.app.use('/api/public/roles',rolRoutes);
    this.app.use('/api/public/usuarios',usuarioRoutes);
  }
  //Iniciar el server
  public start():void{
    this.app.listen(this.app.get('PORT'),() => {
      console.log('Servidor funcionando en el puerto ', this.app.get('PORT'));
    });
  }
}

//Llamar al start y iniciar el servidor
const server = new Server();
server.start();
