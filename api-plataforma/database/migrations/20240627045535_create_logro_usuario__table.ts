import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('logro_usuario', (t)=>{
        t.integer('id_logro').primary()
            .notNullable()
            .references('id')
            .inTable('logro');
        t.string('username_usuario').primary()
            .notNullable()
            .references('username')
            .inTable('usuario');
        t.date('fecha_conseguido').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('logro_usuario');
}

