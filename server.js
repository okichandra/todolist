const express = require('express');
const cors = require('cors')
require('dotenv').config();

const app = express();

const corsOrigin = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOrigin));

app.listen(process.env.PORT, ()=>{
  console.log(`listening on port http://localhost:${process.env.PORT}`)
})