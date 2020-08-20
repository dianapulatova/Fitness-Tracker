const mongoose = require("mongoose");
// schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new.Date
  },
  exercises: [
   { 
       type: {
            type: String,
            trim: true,
            required: "Enter an exercise type."
        },
        name:{
            type: String,
            trim: true,
            required: "Enter an exercise."
            
        },
        duration: {
            type: Number,
            trim: true,
            required: "Enter an exercise."
        },
        weight: {
            type: Number,
            trim: true,
            required: "Enter an exercise."
        },
        reps: {
            type: Number,
            trim: true,
            required: "Enter an exercise."
        },
        sets: {
            type: Number,
            trim: true,
            required: "Enter an exercise."
        },
    }]
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;