const fs = require("fs")
const path  = require("path")

//Define the file path
const filePath = path.join(__dirname, "output.txt")
const dataToAppend = Buffer.from("\nHello, this is a sample append to file")

//Write Synchroniously
try{
   const count = fs.appendFileSync(filePath, dataToAppend, "utf8")
    console.log("File appendeds uccessfully (sync).")    
}   catch(err){
    console.error("Error writing file (sync):", err)
}

//Write Asynchroniously
fs.appendFile(filePath, dataToAppend, "utf8", (err) => {
    if (err) {
        console.error("Error writing file (async):", err)
        return
    }
    console.log("File appended successfully (async).")
})

