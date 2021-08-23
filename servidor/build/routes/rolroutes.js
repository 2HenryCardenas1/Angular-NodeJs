"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolcontroller_1 = __importDefault(require("../controllers/rolcontroller"));
class RolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', rolcontroller_1.default.obtenerRoles);
        this.router.post('/crear', rolcontroller_1.default.crearRol);
        this.router.delete('/:codRol', rolcontroller_1.default.borrarRol);
        this.router.put('/editar/:codRol', rolcontroller_1.default.actualizarRol);
    }
}
const rolRoutes = new RolRoutes();
exports.default = rolRoutes.router;
