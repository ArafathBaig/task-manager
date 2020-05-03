//CRUD operation

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id);
console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{ useNewUrlParser : true }, (error, client) => {

    if(error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    db.collection('users').insertOne({
        _id: id,
        name: 'Vikram',
        age: 26
    }, (error, result) => {
        if(error){
            return console.log("Unable to insert!")
        }

        console.log(result.ops)
    })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Arafath',
    //         age: 20
    //     },
    //     {
    //         name:'Najjashi',
    //         age: 22
    //     }
    // ], (error,result) => {

    //     if(error){
    //         return console.log("Unable to Insert");
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Do it.",
    //         completed: true
    //     },
    //     {
    //         description: "Ate food.",
    //         completed: false
    //     },
    //     {
    //         description: "Champestanu",
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert")
    //     }

    //     console.log(result.ops)
    // })
})