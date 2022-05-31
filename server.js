import express from "express";
import cors from "cors";
import PersonajeRouter from "./src/controllers/Personajecontroller.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/personaje", PersonajeRouter);
//crear el app.use de pelicula

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
