const mongoose = require('mongoose');

const isolatnCenterSchema = new mongoose.Schema({
    stateId : {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'State',
        required: true
    },
    location: {
        type: String,
        required: true
    },
    no_beds: {
        type: Number,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    // created_by: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref:'User',    
    //     required: true,
    // }
},

{ timestamps: true }
);


module.exports = mongoose.model('IsolationCenter', isolatnCenterSchema);