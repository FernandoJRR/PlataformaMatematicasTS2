import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tipo_ejercicio', (p) => {
        p.increments('id').primary();
        p.string('codigo').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('tipo_ejercicio');
}

