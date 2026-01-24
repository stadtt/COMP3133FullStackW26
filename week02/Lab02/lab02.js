const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'input_countries.csv');

const readStream = fs.createReadStream(filePath);

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk.toString());
});

readStream.on('end', () => {
    console.log('No more data to read.');
});

readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});


const { Transform } = require('stream');

//transform stream to array of lines
const lineTransform = new Transform({
    readableObjectMode: true,
    transform(chunk, encoding, callback) {
        const lines = chunk.toString().split('\n');
        lines.forEach(line => this.push(line));
        callback();
    }
});
console.log(lineTransform)
for (const lines of lineTransform) {
    if(lines.includes('Canada')) {
        console.log('Line containing India:', lines);
    }

}