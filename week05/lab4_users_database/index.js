const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const userRouter = require("./routes/UserRoutes.js")

const SERVER_PORT =  3000;

const app = express();
app.use(express.json()); 

const DB_CONNECTION = process.env.DB_CONNECTION


async function connectToMongoDB(connectionString = DB_CONNECTION) {
  await mongoose.connect(connectionString);
}

app.use(userRouter)

app.listen(SERVER_PORT, async () => { 
  console.log('Server is running...') 
  try {
    await connectToMongoDB(DB_CONNECTION);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
