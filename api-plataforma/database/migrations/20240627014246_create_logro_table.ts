import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('logro', (t)=>{
        t.increments('id').primary();
        t.string('titulo').notNullable();
        t.string('descripcion').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('logro');
}

