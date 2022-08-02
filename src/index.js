const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, './config.env') })

const port = process.env.PORT || 5000

const dbo = require('./database')
const app = require('./server')

app.listen(port, async () => {
    await dbo.connectToServer()
    console.log(`Server is running on port: ${port}`)
})