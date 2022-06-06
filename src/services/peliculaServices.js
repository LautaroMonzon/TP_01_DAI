import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const PeliculaoSerie = process.env.PeliculaoSerieBd;
const Tablapersonaje = process.env.TablapersonajeBd;

export class peliculaService {

    getPeliculas = async () => {
        console.log('This is a function on the service');
    
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT id, imagen, titulo, Fechadecreacion from ${PeliculaoSerie}`);
        console.log(response);
    
        return response.recordset;
    }
    
    getPeliculaByFilter = async (titulo, order) => {
        
                const pool = await sql.connect(config);
                let filtro;
                
                if(titulo){
                    filtro=`SELECT Id, Imagen, titulo, Fechadecreacion from ${PeliculaoSerie} WHERE titulo = @titulo `;
                }else{
                    filtro=filtro=`SELECT Id, Imagen, titulo, Fechadecreacion from ${PeliculaoSerie} `;
                }
                
                if(order == "ASC"){
                    filtro +=`ORDER BY Fechadecreacion ASC`;
                }if(order=="DESC"){
                    filtro+=` ORDER BY Fechadecreacion DESC`;
                }
                    const response = await pool.request().input('Titulo',sql.NChar, titulo ?? '').query(filtro)
                    console.log(response)
                    console.log(filtro)
                return response.recordset;
            }

    getPeliculaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${PeliculaoSerie} where id = @id`);
        console.log(response)

        const response2 = await pool.request()
            .input('id',sql.Int, id)
            
            
            .query(`SELECT Tablapersonaje.nombre from ${Tablapersonaje} 
            INNER JOIN Relacion ON ${Tablapersonaje}.id = Relacion.idPersonaje
            WHERE Relacion.idPelicula = @id`);
            console.log(response2)
        return [response.recordset[0], response2.recordset];
    }
    createPelicula = async (pelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        console.log(pelicula?.fechaDeCreacion)
        console.log(pelicula)
        const response = await pool.request()
            .input('titulo',sql.NChar, pelicula?.titulo ?? '')
            .input('Imagen',sql.NChar, pelicula?.Imagen ?? '')
            .input('Fechadecreacion',sql.Date, pelicula?.Fechadecreacion ?? '')
            .input('Calificacion',sql.Int, pelicula?.Calificacion ?? 0)
            .query(`INSERT INTO ${PeliculaoSerie}(titulo, Imagen, Fechadecreacion, Calificacion) VALUES (@titulo, @Imagen, @Fechadecreacion, @Calificacion)`);
        console.log(response)

        return response.recordset;
    }

    updatePelicula = async (id, pelicula) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        
        console.log(pelicula)
        const response = await pool.request()
        .input('id',sql.Int, id)    
            .input('titulo',sql.NChar, pelicula?.titulo ?? '')
            .input('Imagen',sql.NChar, pelicula?.Imagen ?? '')
            .input('Fechadecreacion',sql.Date, pelicula?.Fechadecreacion ?? '')
            .input('Calificacion',sql.Int, pelicula?.Calificacion ?? 0)
            .query(`UPDATE PeliculaoSerie SET titulo = @titulo, Imagen = @Imagen, Fechadecreacion = @Fechadecreacion, Calificacion = @Calificacion WHERE id = @Id`);
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