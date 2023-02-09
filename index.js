const path = require('path')

require("dotenv").config({ path: path.resolve(__dirname, './src/config.env') })

const port = process.env.PORT || 5000

const dbo = require('./src/database')
const app = require('./src/server')

app.listen(port, async () => {
    await dbo.connectToServer()
    console.log(`Server is running on port: ${port}`)
})