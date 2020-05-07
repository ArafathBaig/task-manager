require('../src/db/mongoose')
const User = require('../src/models/user')

//5eaffba19f384b0828b68489

// User.findByIdAndUpdate('5eaffcbbdea83d41c4a020eb', {age : 1}).then(user => {
//     console.log(user)

//     return User.countDocuments({age: 1})
// }).then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5eaffba19f384b0828b68489',44).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})