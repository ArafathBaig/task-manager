const express = require('express')
require('./db/mongoose')
const User = require("./models/user")
const Task = require("./models/task")
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const main = async () => {
    // const task = await Task.findById('5ebc2b86445d2a08f8b42f16')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5ebc2b6b445d2a08f8b42f14')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)


}

main()