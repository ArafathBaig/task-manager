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
   
    // db.collection('users').updateOne({
    //     _id: ObjectId("5ead580fac64760fd0a2725a")
    // }, {
    //     $inc : {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
        
    // } )

    db.collection('users').deleteMany({
        age: 20
    }).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
    
       
})