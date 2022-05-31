import { Router } from 'express';
import { personajeService } from '../services/personajeServices.js';

const router = Router();
const PersonajeServices = new personajeService();




getPeliculas = async () => {
    console.log('This is a function on the service');

    const pool = await sql.connect(config);
    const response = await pool.request().query(`SELECT * from ${PeliculaoSerie}`);
    console.log(response);

    return response.recordset;
}
