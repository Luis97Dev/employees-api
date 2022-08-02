
const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '../config.env') })
const dbo = require('../database')

const createCollections = async () => {
    await dbo.connectToServer()
    let _db = dbo.getDb()

    await _db.createCollection('records', {
        validator: {
            $jsonSchema: require('../schemas/records')
        }
    })
    dbo.closeServer()
}

createCollections()