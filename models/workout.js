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
            required: "Enter an exercise name."
            
        },
        duration: {
            type: Number,
            trim: true,
            required: "Enter an exercise duration in minutes."
        },
        weight: {
            type: Number,
           
        },
        reps: {
            type: Number,
           
        },
        sets: {
            type: Number,
           
        },
    }]
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
