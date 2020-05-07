require('../src/db/mongoose')

const Task = require('../src/models/task')

Task.findByIdAndDelete('5eb1ae2c8f8cd2386c10d993').then(task => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})