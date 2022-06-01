import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const PeliculaoSerie = process.env.PeliculaoSerieBd;

export class peliculaService {

    getPeliculas = async () => {
        console.log('This is a function on the service');
    
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT id, imagen, titulo, Fechadecreacion from ${PeliculaoSerie}`);
        console.log(response);
    
        return response.recordset;
    }
    
    getPeliculaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${PeliculaoSerie} where id = @id`);
        console.log(response)

        return response.recordset[0];
    }
    createPelicula = async (pelicula) => {
        console.log('This is a function on the service');
//PROBLEMA CON FECHA DE CREACION
        const pool = await sql.connect(config);
        console.log(pelicula?.fechaDeCreacion)
        console.log(pelicula)
        const response = await pool.request()
            .input('titulo',sql.NChar, pelicula?.titulo ?? '')
            .input('Imagen',sql.NChar, pelicula?.Imagen ?? '')
            .input('Fechadecreación',sql.Date, pelicula?.fechaDeCreacion ?? '')
            .input('Calificación',sql.Int, pelicula?.Calificación ?? 0)
            .input('PersonajesAsociados',sql.NChar, pelicula?.PersonajesAsociados ?? '')
            .query(`INSERT INTO ${PeliculaoSerie}(titulo, Imagen, Fechadecreacion, Clasificación, PersonajesAsociados) VALUES (@titulo, @Imagen, @Fechadecreación, @Calificación, @PersonajesAsociados)`);
        console.log(response)

        return response.recordset;
    }
    deletePeliculaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${PeliculaoSerie} WHERE id = @id`);
        console.log(response)

        return response.recordset;
    }



}