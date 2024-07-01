import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('ejercicio', (p)=>{
        p.increments('id').notNullable();
        p.integer('id_tipo_ejercicio')
            .notNullable()
            .references('id')
            .inTable('tipo_ejercicio');
        p.integer('id_tema')
            .notNullable()
            .references('id')
            .inTable('tema');
        p.integer('id_dificultad')
            .notNullable()
            .references('id')
            .inTable('dificultad');
        p.date('fecha_creacion').notNullable();
        p.date('fecha_modificacion').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('ejercicio');
}

