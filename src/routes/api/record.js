const app = require('express')
const router = app.Router()

const dbo = require('../../database')
const ObjectId = require('mongodb').ObjectId
router.get('/employees', (req, res, next) => {
  let collectionRecords = dbo.getCollection('records')
  collectionRecords
    .find({})
    .toArray((err, result) => {
        try {
            if (err) throw err
            res.json(result)
        } catch (error) {
            next(error)
        }
    })
})

router.get('/employees/:id', (req, res, next) => {
  let collectionRecords = dbo.getCollection('records')
  let myquery = {_id: ObjectId(req.params.id)};
  collectionRecords
    .findOne(myquery, (err, result) => {
      try {
          if (err) throw err;
          res.json(result);
      } catch (error) {
          next(error)
      }
    });
})

router.post('/employees', (req, res, next) => {
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
        res.json(result);
      } catch(error) {
        next(error)
      }
    });
})

router.put('/employees/:id', (req, res, next) => {
  let collectionRecords = dbo.getCollection('records')
  collectionRecords
    .updateOne({_id: ObjectId(req.params.id)}, {$set: req.body}, (err, result) => {
      try {
        if (err) throw err
        console.log(result)
        res.json(result);
      } catch(error) {
        next(error)
      }
    })
})

router.delete('/employees/:id', (req, res, next) => {
  let collectionRecords = dbo.getCollection('records')
  collectionRecords
    .deleteOne({_id: ObjectId(req.params.id)}, (err, result) => {
      try {
        if(err) throw err
        console.log(result)
        res.json(result)
      } catch (error) {
        next(error)
      }
    })
})

module.exports = router