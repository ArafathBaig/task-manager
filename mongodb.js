//CRUD operation

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser : true }, (error, client) => {

    if(error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').find({ name : 'Arafath'}).toArray((error, users)  => {
    //     console.log(users)
    // })

    db.collection('tasks').find({ completed : false}).toArray((error, users) => {
        console.log(users)
    })
       
})