import express from 'express';
import router from './api/routes';
import client from './config/config'

import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(bodyParser.json());


//database connection
client.connect();
// application routing
const query = `Select * from "Users"`;

client.query(query, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message)
    }
    client.end;
})
app.use(router);

app.listen(PORT, () => {
  console.log(`Servert running on ${PORT}`);
});
export default app;
