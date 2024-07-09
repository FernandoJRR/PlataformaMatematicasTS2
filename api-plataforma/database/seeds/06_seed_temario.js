/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('temario').del()
  await knex('temario').insert([
    {
      titulo: 'Teoria de conjuntos',
      descripcion: 'Analizar y resolver problemas aplicando la teoria de conjuntos ',
      username_creador: 'profesor1',
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Aritmetica',
      descripcion: 'Aplicar la teoria fundamental de la aritmetica para resolver problemas complejos',
      username_creador: 'profesor1',
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Algebra 1',
      descripcion: 'Aplicar la teoria basica de algebra para poder tener una base adecuada para temas futuros',
      username_creador: 'profesor1',
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Trigonometría',
      descripcion: 'Desarrollo de problemas trigonometricos',
      username_creador: 'profesor1',
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Algebra 2',
      descripcion: 'Aplicar conocimientos basicos de algebra y trigonometia para desarrollar problemas de mayor complejidad',
      username_creador: 'profesor1',
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Teoria de numeros',
      descripcion: 'Obtener conocimientos de operaciones entre numeros ',
      username_creador: 'profesor1',
      fecha_creacion: new Date().toISOString(),
    },
    {
      titulo: 'Geometria analitica',
      descripcion: 'Aplicar los conocimientos de trigonometria algebra y aritmetica',
      username_creador: 'profesor1',
      fecha_creacion: new Date().toISOString(),
    },
  ]);
};
