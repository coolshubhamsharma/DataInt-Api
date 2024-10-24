const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    campaign_id: Number,
    title: String,
    leads_count: Number
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
