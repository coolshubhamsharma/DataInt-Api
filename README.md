<h1 align="center"><b> Data Int&Rep API </b></h1> 

<br>

<h6>The "/leads" route Simulate fetching CRM lead data </h6>
<p align="center">
<img src="./images/Screenshot 2024-10-24 184506.png" width="700" title="">
</p >


<h6>The "/campaign" route simulate fetching Marketing campaign dataa </h6>
<p align="center">
<img src="./images/Screenshot 2024-10-24 184604.png" width="700" title="">
</p >


<h6>The "/exports/pdf" & "/exports/csv" routes are endpoints that processes the raw lead and campaign data to generate some meaningful metrics. </h6>
<p align="center">
<img src="./images/Screenshot 2024-10-24 184651.png" width="700" title="">
</p >


<h6>The "/check-leads" route checks the no of leads for triggering email alert when leads exceed threshold </h6>
<p align="center">
<img src="./images/Screenshot 2024-10-24 184731.png" width="700" title="">
</p >



## Problem Statement
1. API Service Development:
  a. Integrate with dummy CRM and Marketing platforms.
  b. Simulate fetching lead and campaign data via dummy data.
2. Data Storage and Processing:
  a. Use a relational or NoSQL database to store the fetched data.
  b. Build an ETL process to transform raw data into meaningful metrics.
3. Reporting and Alerts:
  a. Implement an API endpoint to generate reports (PDF/CSV).
  b. Include basic email notifications for alerts when certain conditions are met.
4. Submission:
  a. GitHub repository link for the API.
  b. README detailing API usage and instructions


## Tech Stack


-   Tech : Express , MongoDB , Javascript , Nodemailer , Faker , CsvWriter ,Pdfkit

## Summary
    This complete code integrates:

   * API Development: Routes to export reports in CSV and PDF formats using MongoDB.

  * Data Storage and Processing: Using Mongoose for data models and generateMetrics for the ETL process.

  * Alerts: Triggering email alerts based on metrics.

  * Dummy Data: The data is pulled dynamically through dummy integrations.

## Install Dependencies

- npm install   

## Start The Development Server

- npm start


