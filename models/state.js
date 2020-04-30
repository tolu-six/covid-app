const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    state_name : String
},
{ timestamps: true });



module.exports = mongoose.model('State', stateSchema);