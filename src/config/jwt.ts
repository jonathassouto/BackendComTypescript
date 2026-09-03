import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();

interface tokenConfig {
  secret: string; //jsonwebtoken.Secret | jsonwebtoken.PrivateKey;
  expire: string | undefined;
}

const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";

const jwtConfig: tokenConfig = {
  secret: secret,
  expire: process.env.JWT_EXPIRE,
};
export default jwtConfig;
