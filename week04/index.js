const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require("./routes/RestaurantRoutes.js")

const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); 

// const DB_NAME = "db_comp3133_employee"
// const DB_USER_NAME = ''
// const DB_PASSWORD = '' 
// const CLUSTER_ID = ''
const DB_CONNECTION = `mongodb+srv://---------@cluster0.tyglb6s.mongodb.net/?appName=Cluster0`

async function connectToMongoDB(connectionString = DB_CONNECTION) {
  await mongoose.connect(connectionString);
}


app.use(restaurantRouter)


app.listen(SERVER_PORT, () => { 
  console.log('Server is running...') 
  try {
    connectToMongoDB(DB_CONNECTION);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
