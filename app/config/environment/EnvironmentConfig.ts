import dotenv from 'dotenv';
dotenv.config();

const defaultSecretKey = '';
const defaultPublicKey = '';

export const PORT = process.env.PORT;
export const DB_CONNECT = process.env.MONGO_CONNECT_URL;
export const SECRET_KEY = Buffer.from(process.env.SECRET_KEY || defaultSecretKey).toString();
export const PUBLIC_KEY = Buffer.from(process.env.PUBLIC_KEY || defaultPublicKey, 'base64').toString();
