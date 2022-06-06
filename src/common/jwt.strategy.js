/*import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import "dotenv/config";
import jwt from "jsonwebtoken";

const opt = {
  secretOrKey: process.env.AUTH_HS256_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  issuer: `${process.env.AUTH_ISSUER_URL}`,
  algorithms: ["HS256"],
};

export const jwtStrategy = new Strategy(opt, (jwt_payload, done) => {
  if (!jwt_payload){done(true);} 
  else{done(null, jwt_payload);} 
});

export const Authenticate = (req,res,next ) => {
  passport.authenticate(jwtStrategy, (err, user) => {
      if(err) res.status(401).send({ messge: 'Unauthorized' });
      if(!user) res.status(401).send({ messge: 'Unauthorized' });
      else next();
  })(req, res, next);
};

const getToken = () => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 18; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const getSignedToken = () => {
  const userId = getToken();
  const userMail = `${userId}@example.com`;
  const token = jwt.sign(
    {
      payload: "custom payload",
      userEmail: userMail,
    },
    process.env.AUTH0_HS256_KEY,
    {
      issuer: "http://pizza.ort/",
      subject: userId,
      audience: ["http://localhost/"],
      expiresIn: 60 * 24 * 24,
    }
  );

  return token;
};

console.log(getSignedToken());*/