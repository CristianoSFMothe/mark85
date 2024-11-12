const { MongoClient } = require('mongodb')
require('dotenv').config();

const mongoUri = process.env.MONGO_URI;

const client = new MongoClient(mongoUri)

const connect = async () => {
  await client.connect()

  return client.db('markDB')
}

const disconnect =  async () => {
  await client.disconnect()
}

module.exports = { connect, disconnect }