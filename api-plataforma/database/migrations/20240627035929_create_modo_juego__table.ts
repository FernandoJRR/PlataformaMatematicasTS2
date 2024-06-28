import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("modo_juego",(t) =>{
        t.increments('id').primary();
        t.string('codigo').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('modo_juego');
}

