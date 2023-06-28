const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const User = require('./Routes/user.routes');

const app = express();
dotenv.config()

const corsOrigin = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOrigin));
app.use(express.json());
app.use(User)

app.listen(process.env.PORT, ()=>{
  console.log(`listening on port http://localhost:${process.env.PORT}`)
})