import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('usuario', (t) => {
        t.string('username').primary();
        t.string('nombre').notNullable();
        t.string('password').notNullable();
        t.string('correo').notNullable();
        t.integer('id_rol')
            .notNullable()
            .references('id')
            .inTable('rol');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('usuario');
}

