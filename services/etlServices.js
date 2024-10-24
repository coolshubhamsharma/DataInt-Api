const Lead = require('../models/Lead');
const Campaign = require('../models/Campaign');

// Function to generate metrics
const generateMetrics = async () => {
    const totalLeads = await Lead.countDocuments();
    const totalCampaigns = await Campaign.countDocuments();
    
    const campaignStats = await Campaign.aggregate([
        { $group: { _id: null, totalLeadsInCampaigns: { $sum: "$leads_count" } } }
    ]);

    return {
        totalLeads,
        totalCampaigns,
        totalLeadsInCampaigns: campaignStats[0]?.totalLeadsInCampaigns || 0
    };
};

module.exports = { generateMetrics };
