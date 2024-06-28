/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rol').del()
  await knex('rol').insert([
    {codigo: 'Estudiante'},
    {codigo: 'Profesor'},
    {codigo: 'Administrador'}
  ]);
};
