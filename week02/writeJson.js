const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'user.json');

// Data to be written to the JSON file
const jsonData = [{
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
}]

// Write Synchronously
try {
    const dataString = JSON.stringify(jsonData, null, 2); // Pretty print with 2 spaces
    fs.writeFileSync(filePath, dataString, 'utf8');
    console.log('JSON file written successfully (sync).');
}
catch (err) {
    console.error('Error writing JSON file (sync):', err);
}

//Read Synchronously to verify
try {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    console.log('JSON file content (sync):', parsedData);

    const newUsr = {
        name: "Jane Smith",
        age: 25,
        email: "jane.smith@gmail.com"
    };

    parsedData.push(newUsr);

    const updatedDataString = JSON.stringify(parsedData, null, 2);
    fs.writeFileSync(filePath, updatedDataString, 'utf8');
    console.log('New user added and JSON file updated successfully (sync).');
}
catch (err) {
    console.error('Error reading JSON file (sync):', err);
}
