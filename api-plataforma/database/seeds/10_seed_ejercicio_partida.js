// seeds/10_ejercicio_partida.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('ejercicio_partida').del();
  
    // Inserts seed entries
    await knex('ejercicio_partida').insert([
      { id_ejercicio: 1, id_partida: 1, resuelto_satisfactoriamente: true },
      { id_ejercicio: 1, id_partida: 2, resuelto_satisfactoriamente: false },
      { id_ejercicio: 1, id_partida: 3, resuelto_satisfactoriamente: true },
      { id_ejercicio: 1, id_partida: 4, resuelto_satisfactoriamente: false },
      { id_ejercicio: 1, id_partida: 5, resuelto_satisfactoriamente: true },
      { id_ejercicio: 1, id_partida: 6, resuelto_satisfactoriamente: false },
      { id_ejercicio: 1, id_partida: 7, resuelto_satisfactoriamente: true },
      { id_ejercicio: 1, id_partida: 8, resuelto_satisfactoriamente: false },
      { id_ejercicio: 1, id_partida: 9, resuelto_satisfactoriamente: true },
      { id_ejercicio: 1, id_partida: 10, resuelto_satisfactoriamente: false },
      // 5 registros para el ejercicio 2
    { id_ejercicio: 2, id_partida: 1, resuelto_satisfactoriamente: true },
    { id_ejercicio: 2, id_partida: 3, resuelto_satisfactoriamente: false },
    { id_ejercicio: 2, id_partida: 4, resuelto_satisfactoriamente: true },
    { id_ejercicio: 2, id_partida: 5, resuelto_satisfactoriamente: false },
    { id_ejercicio: 2, id_partida: 6, resuelto_satisfactoriamente: true },


    ]);
  };
  