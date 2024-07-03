/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('modo_juego').del()
  await knex('modo_juego').insert([
    {codigo: 'Contrarreloj'},
    {codigo: 'Campaña'},
    {codigo: 'Refuerzo'},
  ]);
};
