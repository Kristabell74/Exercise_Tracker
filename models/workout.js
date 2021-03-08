const mongoose = require("mongoose");

const ({db})=("Workout")

//calll the schema 
const Schema = mongoose.Schema;

//schemas help organize and interpret the information
const workoutSchema = new Schema({
    day: {
        type: Date,
        required: "Date of workout",
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Exercise type"
            },
            name: {
                type: String,
                required: "Name of exercise"
            },
            distance: {
                type: Number,
                required: "Enter distance"
            },
            duration: {
                type: Number,
                required: "Enter duration"
            },
            weight: {
                type: Date,
                required: "Enter weight"
            },
            reps: {
                type: Number,
                required: "How many reps"
            },
            sets: {
                type: Number,
                required: "How many sets?"
            },
        }
    ]
});


//connect the total duration of the work out to the schema
workoutSchema.virtual('totalDuration').get(function () {

    //This returns the exercise duration and its total and places properly
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})

const Workouts = mongoose.model("Workout", workoutSchema);

//this is stating that the model is calling the workouts
module.exports = Workouts;