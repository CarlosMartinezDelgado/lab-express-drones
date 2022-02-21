// Iteration #1
const drones = [
  {
    name: "Creeper XL 500",
    propellers: 4,
    maxSpeed: 12,
    url: "https://media.gettyimages.com/photos/flying-drone-with-camera-picture-id688026537?s=612x612",
  },
  {
    name: "Racer 57",
    propellers: 6,
    maxSpeed: 20,
    url: "https://blog.grupodr1.com.br/wp-content/uploads/2018/10/246953-conheca-x-drones-para-fotografia-mais-indicados-para-voce.jpg",
  },
  {
    name: "Courier 3000i",
    propellers: 2,
    maxSpeed: 18,
    url: "https://t3.ftcdn.net/jpg/01/15/24/84/360_F_115248405_BCZiR7gnr8P86Ory0N2zduZjNjYeClbE.jpg",
  },
  {
    name: "Remotely Piloted",
    propellers: 5,
    maxSpeed: 20,
    url: "https://todocondrones.com/wp-content/uploads/2019/12/Drones-y-sus-diferentes-nombres.jpg",
  },
  {
    name: "Unmanned Combat Aerial Vehicle",
    propellers: 4,
    maxSpeed: 25,
    url: "https://iberfdrone.es/wp-content/uploads/2019/10/habilitacion-5-a-15.jpg",
  },
  {
    name: "Aerial Vehicle",
    propellers: 7,
    maxSpeed: 20,
    url: "https://www.postposmo.com/wp-content/uploads/2022/01/DESTACADA-2-420x420.jpg",
  }
];

const Drone = require("../models/Drone.model");

// insertarla en la BD
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/lab-express-drones")
  .then((response) => {
    console.log("conectados a la BD");

    return Drone.insertMany(drones);
  })
  .then((response) => {
    console.log("Drones agregados correctamente");

    // ? hacer la desconexion
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
