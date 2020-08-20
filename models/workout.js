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
            required: "Enter an exercise."
        },
    name:{
        type: String,
        trim: true,
        required: "Enter an exercise."
        
    }
    {duration: },
    {weight: 100},
    {reps: 10},
    {sets: 4}}
  ],
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
