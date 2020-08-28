const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv").config();
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout" , //need mongodb uri here  
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout" ,  {
  useNewUrlParser: true,
  useCreateIndex: true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
