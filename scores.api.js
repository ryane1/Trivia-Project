"use strict";

const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectAll(res) {
    pool.query("SELECT * FROM scores").then(result => {
        res.json(result.rows);
    });
}

router.get("/scores", (req, res) => {
    console.log("show the scores");
    selectAll(res);
});

router.post("/scores", (req, res) => {
    console.log("post score");
    pool.query("INSERT INTO scores (username, score) VALUES ($1::text, $2::int)", [
        req.body.username,
        req.body.score
    ]).then(result => {
        selectAll(res);
    });
});

module.exports = router;