// const express = require ("express");
// const logger = require("morgan");
// const app = express();
// const RedisClient = require("./config/connectRedis");
// const scheduleRoutes = require("./routes/scheduleRoutes");
// require("./services/scheduler");

// const PORT = 1338;
// app.use (express.json());
// app.use(logger("dev"));

// app.listen(PORT, () => {
//     console.log("server is running");
//     RedisClient.connect()
//     .then( () => {
//         console.log("Connected to redis")
//     })
//     .catch((e) => {
//      console.log("Connexted to redis")
//     })
// }) 
const express = require("express");
const logger = require("morgan");
require("dotenv").config();

const cors = require("cors");
const app = express();
require("./services/scheduler");
const scheduleRoutes = require("./routes/scheduleRoutes");
const RedisClient = require("./config/connectRedis");

const PORT = 1338;

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(logger("dev"));

// Routes
app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});
app.use("/api/v1/schedule", scheduleRoutes);

app.listen(process.env.PORT,  async() => {
  console.log(`Server is running on port ${PORT}`);
  RedisClient.connect()
    .then(console.log("Connected to redis"))
    .catch((err) => {
      console.log("Error " + err);
    });
});
