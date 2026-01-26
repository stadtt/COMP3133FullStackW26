const fs = require("fs");
const csv = require("csv-parser");

const input_countries = 'input_countries.csv';
const canadaTxt = 'canada.txt';
const usaTxt = 'usa.txt';


if (fs.existsSync(canadaTxt)) {
    fs.unlinkSync(canadaTxt);
       
}
if (fs.existsSync(usaTxt)) {
    fs.unlinkSync(usaTxt);
       
}

const cStream = fs.createWriteStream(canadaTxt);
const uStream = fs.createWriteStream(usaTxt);

const readStream = fs.createReadStream(input_countries);

readStream.pipe(csv()).on("data",(row)=>{

    if (row.country.toLowerCase() === 'canada') {
            cStream.write(`${row.country},${row.year},${row.population}\n`);
        }

     if (row.country.toLowerCase() === 'united states') {
            uStream.write(`${row.country},${row.year},${row.population}\n`);
        }    
})  

readStream.on('end', () => {
    console.log('No more data to read.');
});


cStream.on('end', () => {
    console.log('No more data to read.');
});


uStream.on('end', () => {
    console.log('No more data to read.');
});