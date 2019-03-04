import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import {sequelize} from './models';
import config from './config/config';
import routes from './routes';

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

routes(app);

sequelize.sync().then(() => {
    app.listen(config.port);
    console.log(`Server running at port: ${config.port}`);
});