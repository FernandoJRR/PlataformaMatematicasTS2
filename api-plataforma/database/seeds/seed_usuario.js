/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("usuario").del();
  await knex("usuario").insert([
    {
      username: "usuario1",
      nombre: "Antonio",
      password: require("../../src/handlers/encription.handler").encriptar(
        "password"
      ),
      id_rol: 1,
      correo: "correo@correo.com"
    },
    {
      username: "profesor1",
      nombre: "Maria",
      password: require("../../src/handlers/encription.handler").encriptar(
        "password"
      ),
      id_rol: 2,
      correo: "correo@correo.com"
    },
    {
      username: "admin1",
      nombre: "Roberto",
      password: require("../../src/handlers/encription.handler").encriptar(
        "password"
      ),
      id_rol: 3,
      correo: "correo@correo.com"
    },
  ]);
};
