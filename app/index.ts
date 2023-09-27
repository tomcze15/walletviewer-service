import express from 'express';
import { PORT } from './config';
import expressApp from './express-app';

const StartServer = async () => {
  const app = express();
  await expressApp(app);

  app
    .listen(PORT, () => {
      console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
    })
    .on('error', (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
