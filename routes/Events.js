const express = require('express');
const { updateMany } = require('../models/Events');
const router = express.Router();
const Event = require('../models/Events');  

//get all timeline events
router.get('/',async(req,res)=>{

    const allEvents = await Event.find();

    res.send(allEvents);
});

//get a specific timeline event
router.get('/:id',async(req,res)=>{

    const specificEvent = await Event.findById({_id: req.params.id});

    res.send(specificEvent);

});

//add a new timeline event
router.post('/create',async(req,res)=>{

    const newEvent = new Event(req.body);
    newEvent.date instanceof Date;

    const saveEvent = await newEvent.save();

    res.send(newEvent);
});

//Edit a timeline event
router.patch('/update/:id',async(req,res)=>{

    const update = req.body;
    update.date instanceof Date;
    const updatedEvent =  await Event.updateOne({_id: req.params.id},{$set: update});

    res.send(updatedEvent);
});

//delete a timeline event
router.delete('/delete/:id',async(req,res)=>{

    const deletedEvent = await Event.findByIdAndDelete({_id: req.params.id});

    res.send(deletedEvent);

});

module.exports = router