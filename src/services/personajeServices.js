import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const Tablapersonaje = process.env.TablapersonajeBd;
const PeliculaoSerie = process.env.PeliculaoSerieBd;
const Relacion = process.env.RelacionBd;

export class personajeService {

    getPersonajes = async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT Imagen, Nombre, Id from ${Tablapersonaje}`);
        console.log(response);

        return response.recordset;
    }

    getPersonajeByFilter = async (nombre, edad, peso,IdPelicula) => {

        const pool = await sql.connect(config);
        let filtro;
        filtro=`SELECT * from ${Tablapersonaje} `;
        if(nombre){
            filtro+=`WHERE nombre = @nombre`;
        }if(edad){
           filtro+=` WHERE edad = @edad`;
        }if(peso){
            filtro+=`  WHERE peso = @peso`;
        }if(IdPelicula){
            filtro=`SELECT ${Tablapersonaje}.id,${Tablapersonaje}.nombre,${Tablapersonaje}.imagen from ${Tablapersonaje}  INNER JOIN ${PeliculaoSerie} ON ${Relacion}.idPersonaje=${Tablapersonaje}.id WHERE ${Relacion}.idPelicula = @IdPelicula`;
            
        }
        console.log(filtro)    
        const response = await pool.request().input('Nombre',sql.NChar, nombre ?? '').input('Edad',sql.Int, edad ?? 0).input('Peso',sql.Int, peso ?? 0).input('IdPelicula',sql.Int, IdPelicula ?? 0).query(filtro)
            console.log(response)

        return response.recordset;
    }
  

    getPersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${Tablapersonaje} where id = @id`);

            
        console.log(response)
        
        const response2 = await pool.request()
            .input('id',sql.Int, id)
            
            
            .query(`SELECT PeliculaoSerie.titulo from ${PeliculaoSerie} 
            INNER JOIN Relacion ON ${PeliculaoSerie}.Id = Relacion.idPelicula
            WHERE Relacion.idPersonaje = @id`);
            console.log(response2)
        return [response.recordset[0], response2.recordset];
    }

    createPersonaje = async (personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('nombre',sql.NChar, personaje?.nombre ?? '')
            .input('peso',sql.Int, personaje?.peso ?? 0)
            .input('imagen',sql.NChar, personaje?.imagen ?? '')
            .input('historia',sql.NChar, personaje?.historia ?? '')
            .input('edad',sql.Int, personaje?.edad ?? 0)
            .query(`INSERT INTO ${Tablapersonaje}(id,nombre, peso, imagen, historia, edad) VALUES (@Id,@nombre, @peso, @imagen, @historia, @edad)`);
        console.log(response)

        return response.recordset;
    }

   updatePersonaje = async (id, personaje) => {
    console.log('This is a function on the service');

    const pool = await sql.connect(config);
    const response = await pool.request()
    .input('id',sql.Int, id)
    .input('nombre',sql.NChar, personaje?.nombre ?? '')
        .input('peso',sql.Int, personaje?.peso ?? 0)
        .input('imagen',sql.NChar, personaje?.imagen ?? '')
        .input('historia',sql.NChar, personaje?.historia ?? '')
        .input('edad',sql.Int, personaje?.edad ?? 0)
        .query(`UPDATE Tablapersonaje SET nombre = @nombre, peso = @peso, imagen = @imagen, historia = @historia, edad = @edad WHERE id = @id`);
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