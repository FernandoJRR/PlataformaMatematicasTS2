import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('temario', (p) =>{
        p.increments('id').primary();
        p.string('titulo').notNullable;
        p.string('descripcion').notNullable();
        p.string('username_creador')
            .notNullable()
            .references('username')
            .inTable('usuario');
        p.date('fecha_creacion').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('temario');
}

