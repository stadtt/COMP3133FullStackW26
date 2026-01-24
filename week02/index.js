const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "input.txt")

console.log("--Start--")
//Read synchroniously
try{

    const data = fs.readFileSync(filePath, "utf8")
    console.log("File content (sync):", data)   
}catch(err){
    console.error("Error reading file:", err)
}


//Read asynchroniously 
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err)
        return
    }
    console.log("File content (async):", data)
})

console.log("--End--")