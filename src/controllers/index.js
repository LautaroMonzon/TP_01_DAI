import { Router } from 'express';
import { personajeService } from '../services/personajeServices.js';

const router = Router();
const PersonajeServices = new personajeService();

router.get('/', async (req, res) => {
  console.log(`This is a get operation`);
  
  nombre = req.query.nombre ?? '';
  edad = req.query.edad ?? '';
  peso = req.query.peso ?? '';

  const personaje = await PersonajeServices.getPersonajes();
  personaje = await PersonajeServices.getPersonajesByFilter(nombre,edad,peso);

  return res.status(200).json(personaje);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await PersonajeServices.getPersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await PersonajeServices.createPersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await PersonajeServices.updatePersonaje(req.body);
  console.log(req.body);
  return res.status(200).json(personaje);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await PersonajeServices.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});



export default router;