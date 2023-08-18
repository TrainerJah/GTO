const mongoose = require('mongoose');
const TrainerSchema = new mongoose.Schema({

    team:{
        type: String,
        required:[true, 'Please Select a Team'],
    },

    friendCode:{
        type: String,
        validate:{
            validator: function(v) {
                return /\d{4}-\d{4}-\d{4}/.test(v);

            }
        },
        required:[true, 'Please Enter Your Trainer Code'],
    },

    preference:{
        type: String,
        required:[true, 'Please Select a Preference for Interactions with other Trainers']
    },

    trainerName: {type: String},

    trainerLevel:{
        type: Number,
        min:[1],
        max:[50],
    },

    favoritePKMN:{type: String},

    trainerText:{
        type: String,
        maxLength:[400, "...we writin' essays now?"]
    }

}, {timestamps: true});
module.exports = mongoose.model('Trainer', TrainerSchema);