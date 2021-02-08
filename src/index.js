const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

import makeCallback from './expressCallback'
import { addUser } from './controllers'

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(cors());


app.post('/user', makeCallback(addUser));

app.listen(3000, () => {
    console.log("UP running on http://localhost:3000/")
})