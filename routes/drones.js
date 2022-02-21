const express = require('express');
const { redirect } = require('express/lib/response');
const async = require('hbs/lib/async');
const router = express.Router();

const DroneModel = require("../models/Drone.model")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
  .then ((allDrones ) =>  {
    res.render("drones/list.hbs", {allDrones})

  })
  .catch((err) => {
    next(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs")

});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    await DroneModel.create ({
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
    })
    res.redirect("/drones/create")
  }
 catch(err) {
   next(err)
 }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  DroneModel.findById(id)
  .then((oneDrone) => {
    res.render("drones/update-form.hbs", {oneDrone})

  })
  .catch((err) => {
    next(err)
  })

});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
    const { id } = req.params
    const { name, propellers, maxSpeed} = req.body
    DroneModel.findByIdAndUpdate (id, { name, propellers, maxSpeed})
    .then((updateDrone) => {
      res.redirect("/drones")

    })
    .catch((err) => {
      next(err)
    })
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
    const { id } = req.params
    DroneModel.findByIdAndDelete(id)

  .then((deleteDrone) => {
    res.redirect("/drones")
  })  

.catch((err) => {
  next(err)
})
});



module.exports = router;
