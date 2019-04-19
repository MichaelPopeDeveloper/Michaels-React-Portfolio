import * as express from 'express';
import * as path from 'path';
// import * as jwt from 'jsonwebtoken';
// import * as crypto from 'crypto';
// import { user } from '../models/User';
const router = express.Router();

export const AppsRoute = router
  .get('/weatherapp', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Views/WeatherCast_View/build', 'index.html'));
  })
  .get('/podomoro', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Views/Podomoro_View/build', 'index.html'));
  });
