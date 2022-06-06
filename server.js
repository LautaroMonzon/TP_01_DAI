import express from "express";
import cors from "cors";
import PersonajeRouter from "./src/controllers/Personajecontroller.js";
import PeliculaRouter from "./src/controllers/Peliculacontroller.js";
/*import passport from 'passport';
import {jwtStrategy} from './src/common/jwt.strategy.js';
import SignInRouter from "./src/controllers/SignIn.js";*/
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
/*app.use(jwtStrategy);
app.use(passport.initialize());*/

app.use("/personaje", PersonajeRouter);
app.use("/pelicula", PeliculaRouter)
/*app.use("/login", SignInRouter)*/

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
