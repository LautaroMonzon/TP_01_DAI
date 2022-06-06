import { Router } from 'express';
/*import { Authenticate } from '../common/jwt.strategy.js';*/
import { peliculaService } from '../services/peliculaServices.js';


const router = Router();
const PeliculaServices = new peliculaService();


router.get('/', /*Authenticate,*/async (req, res) => {
    console.log(`This is a get operation`);
    let pelicula;
    
    const titulo=req.query.titulo;
    const order=req.query.order;

    if(titulo||order){
      pelicula = await PeliculaServices.getPeliculaByFilter(titulo,order);
    }else{
      pelicula = await PeliculaServices.getPeliculas();
    }
    
   
    return res.status(200).json(pelicula);
  });

  router.get('/:id', /*Authenticate,*/async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const pelicula = await PeliculaServices.getPeliculaById(req.params.id);
  
    return res.status(200).json(pelicula);
  });

  router.post('', /*Authenticate,*/async (req, res) => {
    console.log(`This is a post operation`);
  
    const pelicula = await PeliculaServices.createPelicula(req.body);
  
    return res.status(201).json(pelicula);
  });
  
  router.put('/:id', /*Authenticate,*/async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a put operation`);
  
    const pelicula = await PeliculaServices.updatePelicula(req.params.id, req.body);
    console.log(req.body);
    return res.status(200).json(pelicula);
  });

  router.delete('/:id', /*Authenticate,*/async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a delete operation`);
  
    const pelicula = await PeliculaServices.deletePeliculaById(req.params.id);
  
    return res.status(200).json(pelicula);
  });


export default router;