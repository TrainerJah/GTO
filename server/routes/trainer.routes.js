const TrainerController = require('../controllers/trainer.controller');
module.exports = (app) => {
    app.post('/trainer/add', TrainerController.createTrainer);
    app.get('/trainer/:id', TrainerController.getOneTrainer);

    app.get('/trainers', TrainerController.getAllTrainers);
    app.put('/trainer/edit/:id', TrainerController.updateTrainer);
    app.delete('/trainer/delete/:id', TrainerController.deleteTrainer);
}
