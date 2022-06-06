import { Router } from 'express';
import { personajeService } from '../services/personajeServices.js';
/*import { Authenticate } from '../common/jwt.strategy.js';*/

const router = Router();
const PersonajeServices = new personajeService();

router.get('/', /*Authenticate,*/async (req, res) => {
  console.log(`This is a get operation`);
 
  let personaje;

  const nombre = req.query.nombre;
  const edad = req.query.edad;
  const peso = req.query.peso;
  const IdPelicula = req.query.IdPelicula;

if(nombre || edad || peso || IdPelicula){
  personaje = await PersonajeServices.getPersonajeByFilter(nombre,edad,peso,IdPelicula);}
else {
  personaje = await PersonajeServices.getPersonajes();
}
  return res.status(200).json(personaje);
});

router.get('/:id', /*Authenticate,*/async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await PersonajeServices.getPersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('', /*Authenticate,*/async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await PersonajeServices.createPersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', /*Authenticate,*/async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await PersonajeServices.updatePersonaje(req.params.id, req.body);
  console.log(req.body);
  return res.status(200).json(personaje);
});

router.delete('/:id', /*Authenticate,*/async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await PersonajeServices.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});


export default router;
