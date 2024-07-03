/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('temario').del()
  await knex('temario').insert([
    {
      titulo: 'Temario1',
      descripcion: 'Descripcion del temario',
      username_creador: 'profesor1',
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Temario2',
      descripcion: 'Descripcion del temario 2 creado por el profesor1',
      username_creador: 'profesor1',
      fecha_creacion: new Date().toISOString(),
    },
  ]);
};
