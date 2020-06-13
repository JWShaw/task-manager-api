// CRUD Operations: Create, read, update, & delete.

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { /*useNewURLParser: true */ useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }


    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: 'Do the laundry'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})