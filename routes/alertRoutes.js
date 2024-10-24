const express = require('express');
const router = express.Router();
const { generateMetrics } = require('../services/etlServices');
const { sendEmailAlert } = require('../services/emailService');

// Trigger email alert when leads exceed threshold
router.get('/check-leads', async (req, res) => {
    const metrics = await generateMetrics();

    if (metrics.totalLeads > 100) {
        await sendEmailAlert(metrics.totalLeads);
        res.json({ success: true, message: `Alert sent! Total Leads: ${metrics.totalLeads}` });
    } else {
        res.json({ success: true, message: `Total Leads: ${metrics.totalLeads}, no alert needed.` });
    }
});

module.exports = router;
