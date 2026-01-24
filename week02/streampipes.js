const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'inputStream.txt');
const outputPath = path.join(__dirname, 'outstream.txt');
    
const readStream = fs.createReadStream(filePath);
const writeStream = fs.createWriteStream(outputPath);   

readStream.pipe(writeStream);

// Add Crypto Transform Stream Example
const crypto = require('crypto');
const { Transform } = require('stream');

const algorithm = 'aes-256-cbc';
const password = 'password123456789012345678901234'; // 32 bytes for aes-256
const iv = crypto.randomBytes(16);

const encryptStream = crypto.createCipheriv(algorithm, Buffer.from(password), iv);
const decryptStream = crypto.createDecipheriv(algorithm, Buffer.from(password), iv);

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        // Example transformation: convert chunk to uppercase
        const transformedChunk = chunk.toString().toUpperCase();
        callback(null, transformedChunk);
    }
});

// Pipe readStream through transformStream and then to writeStream
readStream
    .pipe(transformStream)
    .pipe(encryptStream)
    .pipe(decryptStream)
    .pipe(writeStream);

writeStream.on('finish', () => {
    console.log('Data has been transformed, encrypted, decrypted, and written to the output file.');
});

writeStream.on('error', (err) => {
    console.error('Error with the write stream:', err);
});

readStream.on('error', (err) => {
    console.error('Error with the read stream:', err);
});