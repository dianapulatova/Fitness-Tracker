const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3333;

// create const app
const app = express();

//create back-end logger
app.use(logger("dev"));

//add middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static pop up 
app.use(express.static("public"));

// heroku - process.env.MONGODB_URI; localhost -  "mongodb://localhost/workout"

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// connect to routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
