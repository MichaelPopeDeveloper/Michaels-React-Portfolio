import * as express from 'express';
// import * as jwt from 'jsonwebtoken';
// import * as crypto from 'crypto';
// import { user } from '../models/User';
const router = express.Router();

export const githubRoute = router
  .get('/', (req, res) => {
    res.send('User Home Page');
  });
