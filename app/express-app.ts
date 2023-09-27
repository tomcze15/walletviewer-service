import { Express } from 'express';
import { StatusCodes } from 'http-status-codes';

export default (app: Express) => {
  app.get('/', async (req, res) => {
    res.status(StatusCodes.OK).json({
      msg: 'OK'
    });
  });
};
