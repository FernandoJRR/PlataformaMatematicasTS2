import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tema',(p) => {
        p.increments('id').primary();
        p.string('titulo').notNullable();
        p.string('descripcion').notNullable();
        p.integer('id_temario')
            .notNullable()
            .references('id')
            .inTable('temario');
        p.integer('id_tema_previo')
            .references('id')
            .inTable('tema');
        p.date('fecha_creacion').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('tema');
}

