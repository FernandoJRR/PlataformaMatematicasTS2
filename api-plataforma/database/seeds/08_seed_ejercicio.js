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
      data_json: { pregunta: '¿Cuanto es 10/5?', respuesta: '2' },
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
    {
      id_tipo_ejercicio: 1,
      id_tema: 2,
      id_dificultad: 3,
      anotacion: 'Anotacion para el ejercicio',
      data_json: {
        parejasIzquierda: ['5*5*+5', 'El orden de los factores no altera el producto', '1+1'],
        parejasDerecha: ['30', 'Suma/multiplicacion', '2']
      },
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
    {
      id_tipo_ejercicio: 3,
      id_tema: 3,
      id_dificultad: 2,
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
      id_tipo_ejercicio: 2,
      id_tema: 4,
      id_dificultad: 1,
      anotacion: 'Anotacion para el ejercicio',
      data_json: {data_json: {
        pregunta: '¿Que animal dice miu?',
        opciones: ['Loro', 'Gato', 'Perro', 'Vaca'],
        respuestaCorrecta: 'Gato'
      },
      },
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    },
  ]);
};
