import { Router } from 'express';
import { peliculaService } from '../services/peliculaServices.js';

const router = Router();
const PeliculaServices = new peliculaService();


router.get('/', async (req, res) => {
    console.log(`This is a get operation`);
    const pelicula = await PeliculaServices.getPeliculas();
    return res.status(200).json(pelicula);
  });

  router.get('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const pelicula = await PeliculaServices.getPeliculaById(req.params.id);
  
    return res.status(200).json(pelicula);
  });

  router.post('', async (req, res) => {
    console.log(`This is a post operation`);
  
    const pelicula = await PeliculaServices.createPelicula(req.body);
  
    return res.status(201).json(pelicula);
  });
  
  router.delete('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a delete operation`);
  
    const pelicula = await PeliculaServices.deletePeliculaById(req.params.id);
  
    return res.status(200).json(pelicula);
  });


export default router;