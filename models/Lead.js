const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    lead_id: Number,
    name: String,
    email: String,
    status: String
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
