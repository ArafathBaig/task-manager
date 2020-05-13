const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Task = require('../models/task')

router.post('/tasks', auth, async (req,res) => {

   const task = new Task({
       ...req.body,
       owner: req.user._id
   })

    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }

})

router.get('/tasks', async (req,res) => {

    try{
        const task = await Task.find({})
        res.send(task)
    }catch(e){
        res.status(404).send(e)
    }

})

router.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id

    try{
        const task = await Task.findById(_id)

        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
    
})

router.patch('/tasks/:id' , async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdate = ['description','completed'];

    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

    if(!isValidOperation){
        res.status(400).send({error: 'Invalid Updates'})
    }

    try{
        
        const task = await Task.findById(req.params.id)

        updates.forEach((update) => task[update] = req.body[update])

        await task.save()

        if(!task){
           return res.status(404).send()
        }

        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req,res) => {

    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})


module.exports = router