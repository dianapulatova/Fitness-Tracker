// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
//Database connection
require("dotenv/config");
const connectDB = require("./config/connectDB,js");
const db = require("./models");



const PORT = process.env.PORT || 3333;

// Create const app
const app = express();

//Create back-end logger
app.use(logger("dev"));

//Add middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Static pop up 
app.use(express.static(path.join(__dirname, "/public")));

// Heroku - process.env.MONGODB_URI; localhost -  "mongodb://localhost/workout"

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// // Connect to routes
// app.use(require("./routes/api.js"));
// app.use(require("./routes/html.js"));

//Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "exercise.html"));
});
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "stats.html"));
});

//Get request
app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort({day:-1}).limit(1).then(dbWorkout =>{
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).sort({day:-1}).limit(1).then(dbWorkout =>{
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

//Put requests
app.put("/api/workout/:id", (req, res) => {
    let urlData = req.params;
    let data = req.body;
    db.Workout.updateOne({_id: urlData.id}, {$push: {exercises: [
        {
            "type": data.type, 
            "name": data.name, 
            "duration": data.duration,
            "distance": data.distance, 
            "weight": data.weight, 
            "reps": data.reps, 
            "sets": data.sets
        }
    ]} }).then(dbUpdate => {
        res.json(dbUpdate);
    }).catch(err => {
        res.json(err);
    });  
});

//Post request
app.post("/api/workouts", (req, res) => {
    let data = req.body;
    db.Workout.create({
        day: new Date().setDate(new Date().getDate())
    }).then(dbUpdate => {
        res.json(dbUpdate);
    }).catch(err => {
        res.json(err);
    });
});

connectDB()

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
