require('dotenv').config();
require('module-alias/register');

const { json, urlencoded } = require('body-parser')
const cors = require ('cors')
const express = require('express')

const exempleRouter = require('@models/exemple/exemple.router')
const connect = require('@library/connectDB')

const app = express();
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.disable('x-powered-by')

app.use('/api/exemple', exempleRouter)

app.listen(process.env.PORT, connect(() => {
  console.log(`Listening on port ${process.env.PORT} at http://localhost:${process.env.PORT}`);
}));