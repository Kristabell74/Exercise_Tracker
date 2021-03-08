const router = require("express").Router();

const Workout = require("../models.workout.js");

const database = require("mongodb")



modules.exports = function (app) {

    //calls and catches the api for db- workouts
    router.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400)(err);
            });
    });
    //calls and catches the api for db- workouts range
    router.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    //calls and catches the api workouts and puts them with the date
    //if no date is entered it is assumes with (date.now) that it is todays date.
    router.post("/api/workouts", (req, res) => {
        db.Workout.create({ day: Date.now() })
            .then(workout => {
                res.json(workout)
            }).catch(err => {
                res.status(400).json(err);
            });
    });
    //calls and catches the data and upddates and pushes the data  
    app.put("/api/workouts/:id", (req, res) => {

        db.Exercise.create(req.body)
            .then((data) => db.Workout.findOneAndUpdate(
                { _id: req.params.id },

                //pushes the exercise data and the duration to the db
                {
                    $push: {
                        exercises: data._id
                    },
                    $inc: {
                        totalDuration: data.duration
                    }
                },
                { new: true })

                //the .json gets the data and it is caught in db workout
            )//any err are also caught below
            .then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    });


};
module.exports = router;
