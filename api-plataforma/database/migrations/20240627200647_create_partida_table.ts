import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('partida', (p)=>{
        p.increments('id').notNullable();
        p.integer('id_tema')
            .notNullable()
            .references('id')
            .inTable('tema');
        p.float('puntaje').notNullable;
        p.string('username_jugador')
            .notNullable()
            .references('username')
            .inTable('usuario');
        p.integer('id_modo_juego')
            .notNullable()
            .references('id')
            .inTable('modo_juego');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('partida');
}

