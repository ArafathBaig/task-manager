require('../src/db/mongoose')
const User = require('../src/models/user')

//5eaffba19f384b0828b68489

User.findByIdAndUpdate('5eaffcbbdea83d41c4a020eb', {age : 1}).then(user => {
    console.log(user)

    return User.countDocuments({age: 1})
}).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})