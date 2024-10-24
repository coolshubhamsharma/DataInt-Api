const express = require('express');
const router = express.Router();
const { generateDummyCampaigns } = require('../data/dummyData');
const Campaign = require('../models/Campaign');

// Fetch and store Marketing campaigns
router.get('/campaigns', async (req, res) => {
    const campaigns = generateDummyCampaigns(5); // Generate 5 dummy campaigns
    await Campaign.insertMany(campaigns); // Store campaigns in MongoDB

    res.json({ success: true, message: 'Campaigns fetched and stored successfully', campaigns });
});

module.exports = router;
