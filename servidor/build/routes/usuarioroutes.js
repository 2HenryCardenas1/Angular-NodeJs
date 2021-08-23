"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariocontroller_1 = __importDefault(require("../controllers/usuariocontroller"));
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuariocontroller_1.default.obtenerUsuarios);
        this.router.post('/crear', usuariocontroller_1.default.crearUsuario);
        this.router.delete('/:codUsu', usuariocontroller_1.default.borrarUusuario);
        this.router.put('/editar/:codUsu', usuariocontroller_1.default.actualizarUsuario);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
