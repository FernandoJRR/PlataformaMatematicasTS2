import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('ejercicio_partida', (p)=>{
        p.integer('id_ejercicio')
            .notNullable()
            .references('id')
            .inTable('ejercicio');
        p.integer('id_partida')
            .notNullable()
            .references('id')
            .inTable('partida');
        p.boolean('resuelto_satisfactoriamente').notNullable();
        p.primary(['id_ejercicio','id_partida']);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('ejercicio_partida');
}

