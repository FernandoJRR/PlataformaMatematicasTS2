/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('ejercicio').del()
  await knex('ejercicio').insert([
    {
      id_tipo_ejercicio: 1,
      id_tema: 1,
      id_dificultad: 1,
      anotacion: 'Anotacion para el ejercicio',
      data_json: '{}',
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
    {
      id_tipo_ejercicio: 1,
      id_tema: 2,
      id_dificultad: 3,
      anotacion: 'Anotacion para el ejercicio',
      data_json: '{}',
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
    {
      id_tipo_ejercicio: 1,
      id_tema: 3,
      id_dificultad: 2,
      anotacion: 'Anotacion para el ejercicio',
      data_json: '{}',
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
    {
      id_tipo_ejercicio: 1,
      id_tema: 4,
      id_dificultad: 1,
      anotacion: 'Anotacion para el ejercicio',
      data_json: '{}',
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
  ]);
};
