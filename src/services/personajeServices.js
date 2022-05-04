import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const Tablapersonaje = process.env.TablapersonajeBd;

export class personajeService {

    getPersonajes = async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${Tablapersonaje}`);
        console.log(response);

        return response.recordset;
    }

    getPersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${Tablapersonaje} where id = @id`);
        console.log(response)

        return response.recordset[0];
    }

    createPersonaje = async (personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('id',sql.Int, personaje?.peso ?? 0)
        .input('nombre',sql.NChar, personaje?.nombre ?? '')
            .input('peso',sql.Int, personaje?.peso ?? 0)
            .input('imagen',sql.NChar, personaje?.imagen ?? '')
            .input('historia',sql.NChar, personaje?.historia ?? '')
            .input('edad',sql.Int, personaje?.edad ?? 0)
            .query(`INSERT INTO ${Tablapersonaje}(id,nombre, peso, imagen, historia, edad) VALUES (@Id,@nombre, @peso, @imagen, @historia, @edad)`);
        console.log(response)

        return response.recordset;
    }

    updatePersonajeById = async (id, personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .input('nombre',sql.NChar, personaje?.nombre ?? '')
            .input('peso',sql.Bit, personaje?.peso ?? false)
            .input('imagen',sql.NChar, personaje?.imagen ?? 0)
            .input('historia',sql.NChar, personaje?.description ?? '')
            .input('edad',sql.Bit, personaje?.edad ?? false)
            .query(`UPDATE personajes SET nombre = @nombre, peso = @peso, imagen = @imagen, historia = @historia WHERE id = @Id`);
        console.log(response)

        return response.recordset;
    }

    deletePersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${Tablapersonaje} WHERE id = @id`);
        console.log(response)

        return response.recordset;
    }
}