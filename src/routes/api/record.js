const app = require('express')
const router = app.Router()

const dbo = require('../../database')
const ObjectId = require('mongodb').ObjectId
router.get('/employees', async (req, res, next) => {
  await dbo.connectToServer()
  let collectionRecords = dbo.getCollection('records')
  collectionRecords
    .find({})
    .toArray((err, result) => {
        try {
            if (err) throw err
            res.status(200).json(result)
        } catch (error) {
            next(error)
        } finally {
          dbo.closeServer()
        }
    })
})

router.get('/employees/:id', async (req, res, next) => {
  await dbo.connectToServer()
  let collectionRecords = dbo.getCollection('records')
  let myquery = {_id: ObjectId(req.params.id)};
  collectionRecords
    .findOne(myquery, (err, result) => {
      try {
          if (err) throw err;
          res.status(200).json(result);
      } catch (error) {
          next(error)
      } finally {
        dbo.closeServer()
      }
    });
})

router.post('/employees', async (req, res, next) => {
  await dbo.connectToServer()
  let collectionRecords = dbo.getCollection('records')
  let myobj = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
  };
  collectionRecords
    .insertOne(myobj, (err, result) => {
      try {
        if (err) throw err
        console.log(result)
        res.status(200).json(result);
      } catch(error) {
        next(error)
      } finally {
        dbo.closeServer()
      }
    });
})

router.put('/employees/:id', async (req, res, next) => {
  await dbo.connectToServer()
  let collectionRecords = dbo.getCollection('records')
  collectionRecords
    .updateOne({_id: ObjectId(req.params.id)}, {$set: req.body}, (err, result) => {
      try {
        if (err) throw err
        console.log(result)
        res.status(200).json(result);
      } catch(error) {
        next(error)
      } finally {
        dbo.closeServer()
      }
    })
})

router.delete('/employees/:id', async (req, res, next) => {
  await dbo.connectToServer()
  let collectionRecords = dbo.getCollection('records')
  collectionRecords
    .deleteOne({_id: ObjectId(req.params.id)}, (err, result) => {
      try {
        if(err) throw err
        console.log(result)
        res.status(200).json(result)
      } catch (error) {
        next(error)
      } finally {
        dbo.closeServer()
      }
    })
})

module.exports = router