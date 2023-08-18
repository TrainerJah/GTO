const Trainer = require('../models/trainer.models');

module.exports.createTrainer = (req, res) => {
    Trainer.create(req.body)
        .then(trainer => {
            console.log(trainer)
            res.json(trainer)
        })  
        .catch(error => {
            console.log(error)
            res.json(error)
        })}

module.exports.getAllTrainers = (req, res) => {
    Trainer.find({})
        .then(trainers => {
            console.log(trainers)
            res.json(trainers)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })}

module.exports.getOneTrainer = (req, res) => {
    Trainer.findOne({_id:req.params.id})
        .then(trainer => {
            console.log(trainer)
            res.json(trainer)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })}

module.exports.updateTrainer = (req, res) => {
    Trainer.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedTrainer => {
            console.log(updatedTrainer)
            res.json(updatedTrainer)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })}

module.exports.deleteTrainer = (req, res) => {
    Trainer.deleteOne({_id:req.params.id})
        .then(deleteConfirm => {
            console.log(deleteConfirm)
            res.json(deleteConfirm)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })}