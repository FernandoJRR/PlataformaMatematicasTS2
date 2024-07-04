/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('tipo_ejercicio').del()
  await knex('tipo_ejercicio').insert([
    {codigo: 'Preguntas y Respuestas'},
    {codigo: 'Parejas'},
    {codigo: 'Opcion Multiple'},
  ]);
};
