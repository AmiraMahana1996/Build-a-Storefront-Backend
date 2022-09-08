import express from 'express';
import router from './routes/routes';

import client from './config/config'
import logger from 'morgan'
import bodyParser from 'body-parser';

const PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(logger('combined'));

//database connection
client.connect();
// application routing
app.use(router);

app.listen(PORT, () => {
    console.log(`Servert running on ${PORT}`);
});
export default app;
