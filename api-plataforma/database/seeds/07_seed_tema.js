/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tema').del()
  await knex('tema').insert([
    {
      titulo: 'Tema1 - Temario1',
      descripcion: 'Descripcion del tema',
      id_temario: 1,
      id_tema_previo: null,
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Tema2 - Temario1',
      descripcion: 'Descripcion del tema',
      id_temario: 1,
      id_tema_previo: 1,
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Tema1 - Temario2',
      descripcion: 'Descripcion del tema',
      id_temario: 2,
      id_tema_previo: null,
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Tema2 - Temario2',
      descripcion: 'Descripcion del tema',
      id_temario: 2,
      id_tema_previo: 3,
      fecha_creacion: new Date().toISOString(),
    },
  ]);
};
