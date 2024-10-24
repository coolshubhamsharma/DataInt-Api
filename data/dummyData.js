const { faker }  = require('@faker-js/faker');

// Function to generate dummy CRM leads
const generateDummyLeads = (count = 10) => {
    const leads = [];
    for (let i = 0; i < count; i++) {
        leads.push({
            lead_id: i + 1,
            name: faker.person.fullName(),
            email: faker.internet.email(),
            status: faker.helpers.arrayElement(['new', 'contacted', 'qualified', 'lost'])
        });
    }
    return leads;
};

// Function to generate dummy Marketing campaigns
const generateDummyCampaigns = (count = 5) => {
    const campaigns = [];
    for (let i = 0; i < count; i++) {
        campaigns.push({
            campaign_id: i + 1,
            title: faker.company.catchPhrase(),
            leads_count: faker.number.int({ min: 50, max: 500 })
        });
    }
    return campaigns;
};

module.exports = {
    generateDummyLeads,
    generateDummyCampaigns
};
