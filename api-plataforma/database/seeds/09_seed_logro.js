/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('logro').del()
  await knex('logro').insert([
    {
      titulo: 'Primera Partida',
      descripcion: 'Juega una partida por primera vez',
    },
    {
      titulo: 'Primera Victoria',
      descripcion: 'Obten un puntaje de mas del 60% en una partida por primera vez',
    },
    {
      titulo: 'Partida Perfecta',
      descripcion: 'Obten un puntaje del 100% en una partida',
    },
    {
      titulo: 'Flash',
      descripcion: 'Juega una partida en modo Contrarreloj por primera vez',
    },
    {
      titulo: 'El Invencible',
      descripcion: 'Juega una partida en modo Invencible por primera vez',
    },
    {
      titulo: 'Reforzando',
      descripcion: 'Juega una partida en modo Refuerzo por primera vez',
    }
  ]);
};
