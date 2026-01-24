const fs = require("fs")
const path  = require("path")

//Define the file path
const filePath = path.join(__dirname, "output.txt")
const dataToWrite = Buffer.from("Hello, this is a sample text written to the file.")

//Write Synchroniously
try{
   const count = fs.writeFileSync(filePath, dataToWrite, "utf8")
    console.log("File written successfully (sync).")    
}   catch(err){
    console.error("Error writing file (sync):", err)
}

//Write Asynchroniously
fs.writeFile(filePath, dataToWrite, "utf8", (err) => {
    if (err) {
        console.error("Error writing file (async):", err)
        return
    }
    console.log("File written successfully (async).")
})

