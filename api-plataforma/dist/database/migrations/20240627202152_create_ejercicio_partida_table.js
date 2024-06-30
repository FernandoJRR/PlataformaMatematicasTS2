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
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable('ejercicio_partida', (p) => {
            p.integer('id_ejercicio')
                .notNullable()
                .references('id')
                .inTable('ejercicio');
            p.integer('id_partida')
                .notNullable()
                .references('id')
                .inTable('partida');
            p.boolean('resuelto_satisfactoriamente').notNullable();
            p.primary(['id_ejercicio', 'id_partida']);
        });
    });
}
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('ejercicio_partida');
    });
}
