const db = require("../models");


module.exports = function(app) {
    // gets the last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // creates a workout
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // adds exercise
    app.put("/api/workouts/:id", (req, res) => {
        const _id = req.params.id;
        const body = req.body
        db.Workout.findByIdAndUpdate(
            { _id },
            { $push: 
                { exercises: body } }
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // gets workout range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
}
