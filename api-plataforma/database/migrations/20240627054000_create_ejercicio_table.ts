import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('ejercicio', (p)=>{
        p.increments('id').notNullable();
        p.integer('it_tipo_ejercico')
            .notNullable()
            .references('id')
            .inTable('tipo_ejercicio');
        p.integer('id_tema')
            .notNullable()
            .references('id')
            .inTable('tema');
        p.date('fecha_creacio').notNullable();

    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('ejercicio');
}

