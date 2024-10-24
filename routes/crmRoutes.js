const express = require('express');
const router = express.Router();
const { generateDummyLeads } = require('../data/dummyData');
const Lead = require('../models/Lead');

// Fetch and store CRM leads
router.get('/leads', async (req, res) => {
    const leads = generateDummyLeads(10); // Generate 10 dummy leads
    await Lead.insertMany(leads); // Store leads in MongoDB

    res.json({ success: true, message: 'Leads fetched and stored successfully', leads });
});

module.exports = router;
