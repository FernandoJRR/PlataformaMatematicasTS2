
  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('partida').del();
    // Inserts seed entries
    await knex('partida').insert([
      { puntaje: 85, username_jugador: 'usuario1', id_modo_juego: 1 },
      { puntaje: 90, username_jugador: 'usuario1', id_modo_juego: 2 },
      { puntaje: 75, username_jugador: 'usuario1', id_modo_juego: 1 },
      { puntaje: 60, username_jugador: 'usuario1', id_modo_juego: 3 },
      { puntaje: 95, username_jugador: 'usuario1', id_modo_juego: 2 },
      { puntaje: 80, username_jugador: 'usuario1', id_modo_juego: 1 },
      { puntaje: 70, username_jugador: 'usuario1', id_modo_juego: 3 },
      { puntaje: 88, username_jugador: 'usuario1', id_modo_juego: 1 },
      { puntaje: 92, username_jugador: 'usuario1', id_modo_juego: 2 },
      { puntaje: 78, username_jugador: 'usuario1', id_modo_juego: 3 },
    ]);
  };
  