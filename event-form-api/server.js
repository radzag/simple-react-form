const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Participant = require("./api/models/eventFormModel");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4200;
const connectionString = "mongodb://localhost/EventFormdb";

mongoose.Promise = global.Promise;
mongoose
  .connect(connectionString, { useNewUrlParser: true })
  .then(() => console.log("Connection to MongoDB established."))
  .catch(err => console.error("Something went wrong.", err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/eventFormRoutes");
routes(app);

// app.listen(port);
let server = app.listen(port);

console.log("API server started on: " + port);

module.exports = server;