const { MongoClient, Collection } = require('mongodb')

const client = new MongoClient(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

let _db


module.exports = {
    connectToServer: async () => {
        try {
            await client.connect()
            _db = client.db('employees')
            console.log('Successfully conected to mongoDB.')
            return true
        } catch (err) {
            console.error(err)
            throw err
        }
    },
    getDb: () => {
        return _db
    },
    getCollection: (collectionName) => {
        return _db.collection(collectionName)
    },
    closeServer: () => {
        client.close()
    },
    
}
 
