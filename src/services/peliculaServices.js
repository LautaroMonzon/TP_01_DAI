import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const PeliculaoSerie = process.env.PeliculaoSerieBd;

export class peliculaService {

    getPeliculas = async () => {
        console.log('This is a function on the service');
    
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${PeliculaoSerie}`);
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

        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('id',sql.Int, pelicula?.Id ?? 0)
        .input('titulo',sql.NChar, pelicula?.nombre ?? '')
            .input('Imagen',sql.NChar, pelicula?.Imagen ?? '')
            .input('Fechadecreación',sql.Date, pelicula?.Fechadecreación ?? '')
            .input('Calificación',sql.Int, pelicula?.Calificación ?? 0)
            .input('PersonajesAsociados',sql.NChar, pelicula?.PersonajesAsociados ?? '')
            .query(`INSERT INTO ${PeliculaoSerie}(Id,titulo, Imagen, Fechadecreación, Clasificación, PersonajesAsociados) VALUES (@Id,@titulo, @Imagen, @Fechadecreación, @Clasificación, @PersonajesAsociados)`);
        console.log(response)

        return response.recordset;
    }

}