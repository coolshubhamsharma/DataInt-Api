const express = require('express');
const router = express.Router();
const { generateMetrics } = require('../services/etlServices');
const PDFDocument = require('pdfkit');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Export report as CSV
router.get('/export/csv', async (req, res) => {
    const metrics = await generateMetrics();

    const csvWriter = createCsvWriter({
        path: 'metrics_report.csv',
        header: [
            { id: 'metric', title: 'Metric' },
            { id: 'value', title: 'Value' }
        ]
    });

    const records = [
        { metric: 'Total Leads', value: metrics.totalLeads },
        { metric: 'Total Campaigns', value: metrics.totalCampaigns },
        { metric: 'Total Leads Across Campaigns', value: metrics.totalLeadsInCampaigns }
    ];

    await csvWriter.writeRecords(records);
    res.download('metrics_report.csv');
});

// Export report as PDF
router.get('/export/pdf', async (req, res) => {
    const metrics = await generateMetrics();

    const doc = new PDFDocument();
    doc.pipe(res);

    doc.text('Metrics Report');
    doc.text(`Total Leads: ${metrics.totalLeads}`);
    doc.text(`Total Campaigns: ${metrics.totalCampaigns}`);
    doc.text(`Total Leads Across Campaigns: ${metrics.totalLeadsInCampaigns}`);

    doc.end();
});

module.exports = router;
