"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbmanager_1 = __importDefault(require("../config/dbmanager"));
class RolController extends dbmanager_1.default {
    obtenerRoles(req, res) {
        const sql = 'SELECT codrol , nombrerol FROM rol';
        return RolController.ejecutarConsulta(sql, req, res, 'SELECT');
    }
    crearRol(req, res) {
        console.log(req.body);
        //const sql: string = 'INSERT INTO rol( nombrerol ) VALUES (req)';
        const sql = 'INSERT INTO rol set ?';
        return RolController.ejecutarConsulta(sql, req.body, res, 'INSERT');
    }
    borrarRol(req, res) {
        if (!isNaN(Number(req.params.codRol))) {
            const codigo = Number(req.params.codRol);
            const sql = 'DELETE FROM rol WHERE codrol = ?';
            return RolController.ejecutarConsulta(sql, codigo, res, 'DELETE');
        }
        else {
            return Promise.resolve(res.status(400).json({
                'mensaje': 'Codigo invalido'
            }));
        }
    }
    actualizarRol(req, res) {
        if (!isNaN(Number(req.params.codRol))) {
            const codigo = Number(req.params.codRol);
            delete req.body.codRol;
            const sql = 'UPDATE rol SET ? WHERE codrol =?';
            const parametros = [req.body, codigo];
            return RolController.ejecutarConsulta(sql, parametros, res, 'UPDATE');
        }
        return Promise.resolve(res.status(400).json({
            'mensaje': 'Codigo inválido'
        }));
    }
}
const rolController = new RolController();
exports.default = rolController;
