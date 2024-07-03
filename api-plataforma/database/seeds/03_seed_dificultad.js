/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('dificultad').del()
  await knex('dificultad').insert([
    {codigo: 'Facil'},
    {codigo: 'Normal'},
    {codigo: 'Dificil'},
  ]);
};
