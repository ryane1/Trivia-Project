"use strict";
const express = require("express");
const app = express();
const questions = require("./question.api");
const scores = require("./scores.api");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", questions);
app.use("/api", scores);
const port = 3000;
app.listen(port, () => console.log(`Server running on port: ${port}`));