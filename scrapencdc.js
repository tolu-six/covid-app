const db = require('./database');
const rp = require('request-promise');
const request = require('request');
const cheerio = require('cheerio');
const redis = require('redis');


const url = 'https://covid19.ncdc.gov.ng/';

rp(url)
.then((html) => {

    const data = [];

    const $ = cheerio.load(html);

    $("table#custom3 > tbody > tr").each((index, element) => {

        const tdTags = $(element).find("td");

        data.push({
            'stateAffected': $(tdTags[0]).text().trim(),
            'confirmedCase': numParse($(tdTags[1]).text().trim()),
            'activeCases': numParse($(tdTags[2]).text().trim()),
            'discharged': numParse($(tdTags[3]).text().trim()),
            'death': numParse($(tdTags[4]).text().trim()),
        });
    });

    saveToDatabase(data);
})
.catch(err => {
    console.log(err);
});


const saveToDatabase = data => {

          let item = JSON.stringify(data);
          
            db.set('statistics', item, (err, reply) => {
               return err ? console.log(err) : console.log(reply);
            });
}

const numParse = (string) => {
    let num = parseInt(string)
    return isNaN(num) ? string : num
};