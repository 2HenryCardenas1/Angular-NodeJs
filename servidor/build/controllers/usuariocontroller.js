"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbmanager_1 = __importDefault(require("../config/dbmanager"));
class UsuarioController extends dbmanager_1.default {
    obtenerUsuarios(req, res) {
        const sql = 'SELECT codusuario , codrol, correo, clave FROM usuario';
        return UsuarioController.ejecutarConsulta(sql, req, res, 'SELECT');
    }
    crearUsuario(req, res) {
        delete req.body.token;
        const sql = 'INSERT INTO usuario set ?';
        return UsuarioController.ejecutarConsulta(sql, req.body, res, 'INSERTUSER');
    }
    borrarUusuario(req, res) {
        if (!isNaN(Number(req.params.codUsu))) {
            const codigo = Number(req.params.codUsu);
            const sql = 'DELETE FROM usuario WHERE codusuario = ?';
            return UsuarioController.ejecutarConsulta(sql, codigo, res, 'DELETE');
        }
        else {
            return Promise.resolve(res.status(400).json({
                'mensaje': 'Codigo invalido'
            }));
        }
    }
    actualizarUsuario(req, res) {
        if (!isNaN(Number(req.params.codUsu))) {
            const codigo = Number(req.params.codUsu);
            delete req.body.codUsu;
            const sql = 'UPDATE usuario SET ? WHERE codusuario =?';
            const parametros = [req.body, codigo];
            return UsuarioController.ejecutarConsulta(sql, parametros, res, 'UPDATE');
        }
        return Promise.resolve(res.status(400).json({
            'mensaje': 'Codigo inválido'
        }));
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
