const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'input.txt');

//FIle Stats
fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error('Error getting file stats:', err);
        return;
    }
    console.log('File Stats:', stats);
    console.log('Is File:', stats.isFile());
    console.log('Is Directory:', stats.isDirectory());
    console.log('File Size (bytes):', stats.size);
}
    
);