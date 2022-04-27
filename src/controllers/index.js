import { Router } from 'express';
import { personajeService } from '../services/PersonajeServices.js';

const router = Router();
const PersonajesService = new personajeService();

router.get('/', async (req, res) => {
  console.log(`This is a get operation`);
  
  const personaje = await PersonajesService.getPersonajes();

  return res.status(200).json(personaje);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await PersonajeService.getpersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await PersonajeService.createpersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await PersonajeService.updatepersonajeById(req.body);

  return res.status(200).json(personaje);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await PersonajeService.deletepersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

export default router;
