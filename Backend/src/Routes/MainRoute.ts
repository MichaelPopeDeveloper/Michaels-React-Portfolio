import * as express from 'express';
import * as path from 'path';
// import * as jwt from 'jsonwebtoken';
// import * as crypto from 'crypto';
// import { user } from '../models/User';
const router = express.Router();

export const MainRoute = router
  .get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../../public/Views/Portfolio_View/build/index.html'));
  });
