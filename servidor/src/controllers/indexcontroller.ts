import { Request, Response } from 'express';

class IndexController {

  public index(req: Request, res: Response) {
    console.log(req.headers);
    res.json({
      'respuesta1': 'la api está hecha en /api/public/roles',
      'respuesta2': 'la api está hecha en /api/public/usuarios'
    })
  }
}

const indexController = new IndexController();
export default indexController;
