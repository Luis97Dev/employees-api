const express = require("express")
const app = express()
const cors = require("cors");

const routes = require('./routes/index')
const errorHandler = require('./middleware/errors')

app.use(cors())
app.use(express.json())
app.use('/api', routes)
app.use(errorHandler)

module.exports = app