//DB CONN
var dbURI = "mongodb+srv://ashwin:Password123@cluster0-utmhi.mongodb.net/test?retryWrites=true&w=majority"
const mongoose = require("mongoose");

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

//REQUIRE
var bodyParser = require('body-parser')
require("./task");
const taskController = require("./controller");
const express = require("express");

//DB PARSER
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);


//SERVER
const port = process.env.PORT || 3301;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

