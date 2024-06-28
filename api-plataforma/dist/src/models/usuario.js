"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const objection_1 = require("objection");
const rol_1 = require("./rol");
class Usuario extends objection_1.Model {
    static get idColumn() {
        return 'username';
    }
    static get relationMappings() {
        return {
            career: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: rol_1.Rol,
                join: {
                    from: 'usuario.id_rol',
                    to: 'rol.id',
                },
            },
        };
    }
}
exports.Usuario = Usuario;
Usuario.tableName = 'usuario';
