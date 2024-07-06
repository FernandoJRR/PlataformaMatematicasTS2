/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('ejercicio').del()
  await knex('ejercicio').insert([
    {
      id_tipo_ejercicio: 3,
      id_tema: 1,
      id_dificultad: 1,
      anotacion: 'Anotacion para el ejercicio',
      data_json: {
        pregunta: '¿Cuál es el océano más grande del mundo?',
        opciones: ['Océano Atlántico', 'Océano Índico', 'Océano Pacífico', 'Océano Ártico'],
        respuestaCorrecta: 'Océano Pacífico'
      },
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
    {
      id_tipo_ejercicio: 1,
      id_tema: 2,
      id_dificultad: 3,
      anotacion: 'Anotacion para el ejercicio',
      data_json: {pregunta: '¿Cuanto es 3+1?', respuesta: '4'},
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
    {
      id_tipo_ejercicio: 2,
      id_tema: 3,
      id_dificultad: 2,
      anotacion: 'Anotacion para el ejercicio',
      data_json: {
        parejasIzquierda: ['4*4', 'El orden de los factores no altera el producto', '5+5'],
        parejasDerecha: ['16', 'Suma/Multiplicacion', '10.']
      },
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
    {
      id_tipo_ejercicio: 1,
      id_tema: 4,
      id_dificultad: 1,
      anotacion: 'Anotacion para el ejercicio',
      data_json: {pregunta: '¿Cuanto es 5*12?', respuesta: '60'},
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
  ]);
};
