// Iteration #1

const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
  url: {
    type: String,
    default:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funiversodrone.com%2F&psig=AOvVaw2ud4bxx40-QLykqeDtn1q-&ust=1645562684779000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD4ivLUkfYCFQAAAAAdAAAAABAD",
  },
});

const DroneModel = mongoose.model("Drone", droneSchema);

module.exports = DroneModel;
