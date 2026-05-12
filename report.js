const newman = require('newman');
require('dotenv').config();
 
newman.run({
   
    collection:require('./DMoney_API_Collection.postman_collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
     delayRequest: 5000, 
         envVar: [
        {

            
            key: "gmailToken",
            value:  process.env.token
        }
    ],
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});