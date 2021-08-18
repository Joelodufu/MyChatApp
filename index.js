const cors = require('cors')
const express = require('express')
const socketIO = require('socket.io')

const router = require('./routes/router')

const port = process.env.PORT||5000


const app = express()
app.use(cors())
const server = app.listen(port)
const io = socketIO(server, {cors: {origin: "*" } } )
app.use(router)