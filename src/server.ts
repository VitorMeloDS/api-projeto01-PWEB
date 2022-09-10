import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config'
import { router } from './router/routerController';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started in ${process.env.HOSTNAME}:${process.env.HOSTNAME}`);
});
