"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        console.log(req.headers);
        res.json({
            'respuesta1': 'la api está hecha en /api/public/roles',
            'respuesta2': 'la api está hecha en /api/public/usuarios'
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
