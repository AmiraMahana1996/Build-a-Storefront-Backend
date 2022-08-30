import express from 'express';
import router from './api/routes';


import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(bodyParser.json());


// application routing

app.use(router);

app.listen(PORT, () => {
  console.log(`Servert running on ${PORT}`);
});
export default app;
