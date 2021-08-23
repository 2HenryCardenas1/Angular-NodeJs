"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconn_1 = __importDefault(require("./dbconn"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class DbManager {
    static ejecutarConsulta(sql, parametros, res, tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            dbconn_1.default.query(sql, parametros, function (error, resultado) {
                if (error) {
                    if (error.code == 'ER_PARSE_ERROR') {
                        console.log('Esta consumiendo el servicio de manera incorrecta');
                        res.status(400).json({ 'respuesta': 'Esta consumiendo el servicio de manera incorrecta' });
                    }
                    console.log('Se ha encontrado un error: ', error);
                    //res.status(400).json({ 'respuesta': error });
                }
                else {
                    switch (tipo.toLowerCase()) {
                        case 'select':
                            res.status(200).json(resultado);
                            break;
                        case 'insert':
                            res.status(200).json({
                                'mensaje': 'Registro creado',
                                'id': resultado.insertId
                            });
                            break;
                        case 'delete':
                            res.status(200).json({
                                'mensaje': 'Registro eliminado',
                                'filas': resultado.affectedRows
                            });
                            break;
                        case 'update':
                            if (resultado.affectedRows > 0) {
                                res.status(200).json({
                                    'mensaje': 'Registro actualizado',
                                    'id': resultado.affectedRows
                                });
                            }
                            else {
                                res.status(400).json({
                                    'mensaje': 'Registro no encontrado'
                                });
                            }
                            break;
                        case 'insertuser':
                            const token = jsonwebtoken_1.default.sign({
                                'id': resultado.insertId,
                                'correo': parametros.correo
                            }, 'alvaroelbarvaro'); //alvaroelbarvaro es mi llave privada
                            res.status(200).json({
                                'token': token
                            });
                            break;
                        default:
                            res.status(400).json({
                                'respuesta': 'Servicio no implementado :C'
                            });
                            break;
                    }
                }
            });
        });
    }
}
exports.default = DbManager;
