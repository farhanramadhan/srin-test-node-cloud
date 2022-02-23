const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'srin-test'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  })

const getItems = () => {
  const collection = db.collection('coll')
  return collection.find({}).toArray()
}


module.exports = { init, getItems }
