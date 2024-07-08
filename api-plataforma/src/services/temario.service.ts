import { Temario } from "../models/temario";
import { Tema } from "../models/tema";
import { Ejercicio } from "../models/ejercicio";
import { timingSafeEqual } from "crypto";

export async function getTemario(idTemario: number) {
  const temario = await Temario.query()
    .findById(idTemario);
  
  if (temario === undefined) {
    throw new Error("El temario no existe");
  }

  const temas = await temario
    .$relatedQuery('temas');
  
  for (const tema of temas) {
    const ejerciciosTema = await tema
    .$relatedQuery('ejercicios');
    
    tema.ejercicios = ejerciciosTema;
  }
  
  temario.temas = temas;

  return temario;
}

export async function getTemarios() {
  const temarios = await Temario.query();

  for (const temario of temarios) {
    const temas = await temario
      .$relatedQuery('temas');
    
    temario.temas = temas;
  }

  return temarios;
}

export async function getTemariosProfesor(usernameProfesor: string) {
  const temarios = await Temario.query()
  .where('username_creador', usernameProfesor);

  for (const temario of temarios) {
    const temas = await temario
      .$relatedQuery('temas');
    
    temario.temas = temas;
  }

  return temarios;
}

export async function createTemario(input: any) {
  const trx = await Temario.startTransaction();
  
  try {
    const temasTemario = input.temas;
    delete input.temas;

    const temario = await Temario.query(trx)
    .insert(input);
    
    let temaPrevio = null;
    for (const inputTema of temasTemario) {
      const ejerciciosTema = inputTema.ejercicios;
      delete inputTema.ejercicios;
      
      inputTema.id_temario = temario.id;
      inputTema.id_tema_previo = temaPrevio;

      const tema = await Tema.query(trx)
      .insert(inputTema);
      
      temaPrevio = tema.id;
      
      for (const inputEjercicio of ejerciciosTema) {
        inputEjercicio.id_tema = tema.id;

        await Ejercicio.query(trx)
        .insert(inputEjercicio);
      }
    }
    
    await trx.commit();
    return temario;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
  
}

export async function addTema(idTemario: number, inputTema: any) {
  const temario = await Temario.query()
    .findById(idTemario);
  
  if (temario === undefined) {
    throw new Error("El temario no existe");
  }

  const ultimoTema = await temario
    .$relatedQuery('temas')
    .orderBy('id', 'desc')
    .first();
  
  const trx = await Temario.startTransaction();
  try {
    let idUltimoTema =  null
    if (ultimoTema !== undefined) {
      idUltimoTema = ultimoTema.id;
    } 

    const ejerciciosTema = inputTema.ejercicios;
    delete inputTema.ejercicios;
    
    inputTema.id_temario = temario.id;
    inputTema.id_tema_previo = idUltimoTema;

    const tema = await Tema.query(trx)
    .insert(inputTema);
    
    for (const inputEjercicio of ejerciciosTema) {
      inputEjercicio.id_tema = tema.id;

      await Ejercicio.query(trx)
      .insert(inputEjercicio);
    }
    
    await trx.commit();
    return tema;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}

export async function getTema(idTema: number) {
  const tema = await Tema.query()
  .findById(idTema);

  if (tema === undefined) {
    throw new Error("El tema no existe");
  }

  const ejerciciosTema = await tema
  .$relatedQuery('ejercicios');

  tema.ejercicios = ejerciciosTema;

  return tema;
}

export async function addEjercicio(idTema: number, inputEjercicio: any) {
  const tema = await Tema.query()
    .findById(idTema);
  
  if (tema === undefined) {
    throw new Error("El tema no existe");
  }

  const trx = await Temario.startTransaction();
  try {

    await Ejercicio.query(trx)
    .insert(inputEjercicio);
    
    await trx.commit();
  } catch (error) {
    await trx.rollback();
  }
  
}

export async function updateTemario(idTemario: number, input: any) {
  const temario = await Temario.query()
    .findById(idTemario);

  if (temario === undefined) {
    throw new Error("El temario no existe");
  }

  const trx = await Temario.startTransaction();
  try {
    await Temario.query()
    .where('id', idTemario)
    .update(input);

    await trx.commit();
    return await Temario.query()
      .findById(idTemario);
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}

export async function updateTema(idTema: number, input: any) {
  const tema = await Temario.query()
    .findById(idTema);

  if (tema === undefined) {
    throw new Error("El tema no existe");
  }

  const trx = await Tema.startTransaction();
  try {
    await Tema.query()
    .where('id', idTema)
    .update(input);

    await trx.commit();
    return await Tema.query()
      .findById(idTema);
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}

export async function updateEjercicio(idEjercicio: number, input: any) {
  const ejercicio = await Ejercicio.query()
    .findById(idEjercicio);

  if (ejercicio === undefined) {
    throw new Error("El ejercicio no existe");
  }

  const trx = await Ejercicio.startTransaction();
  try {
    await Ejercicio.query()
    .where('id', idEjercicio)
    .update(input);

    await trx.commit();
    return await Ejercicio.query()
      .findById(idEjercicio);
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}