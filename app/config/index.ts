import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const DB_CONNECT = process.env.MONGO_CONNECT_URL;
