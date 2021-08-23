"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configdb_1 = __importDefault(require("./configdb"));
const mysql_1 = __importDefault(require("mysql"));
const pool = mysql_1.default.createPool(configdb_1.default.database);
//usar el pool de coneccion
pool.getConnection(function (err, conn) {
    if (err) {
        //console.log('El codigo del error es: ',err.code);
        if (err.code == 'ER_BAD_DB_ERROR') {
            console.log('No existe la database ', configdb_1.default.database.database, ' ', err.code);
        }
        if (err.code == 'ER_ACCESS_DENIED_ERROR') {
            console.log('Nombre de usuario o contraseña es incorrecta');
        }
        if (err.code == 'ENOTFOUND') {
            console.log('Error servidor');
        }
    }
    else {
        if (conn) {
            conn.release();
        }
        console.log('Coneccion establecidad con: ', configdb_1.default.database.database);
    }
});
exports.default = pool;
