const fs = require('fs');
const csv = require('csv-parser');

const input = 'input_countries.csv';
const canada = 'canada.txt';
const usa = 'usa.txt';


if (fs.existsSync(canada)) {
    fs.unlinkSync(canada);
       
}
if (fs.existsSync(usa)) {
    fs.unlinkSync(usa);
       
}

const cStream = fs.createWriteStream(canada);
const uStream = fs.createWriteStream(usa);



fs.createReadStream(input)
    .pipe(csv())
    .on('data', (row) => {
       
        if (row.country.toLowerCase() === 'canada') {
            cStream.write(`${row.country},${row.year},${row.population}\n`);
        }
        
        if (row.country.toLowerCase() === 'united states') {
            uStream.write(`${row.country},${row.year},${row.population}\n`);
        }
    })
    .on('end', () => {
        cStream.end();
        uStream.end();
        console.log('CSV file successfully processed and filtered.');
    });

    