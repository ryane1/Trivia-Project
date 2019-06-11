"use strict";

const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectAll(res) {
    pool.query("SELECT * FROM questions order by random() limit 10").then(result => {
        res.json(result.rows);
    });
};

router.get("/questions", (req, res) => {
    selectAll(res);
});

router.post("/questions", (req, res) => {
    pool.query("insert into questions(question_name, choice_1, choice_2, choice_3, choice_4, answer) values ($1::text, $2::text, $3::text, $4::text, $5::text, $6::text)", [
        req.body.question_name,
        req.body.choice_1,
        req.body.choice_2,
        req.body.choice_3,
        req.body.choice_4,
        req.body.answer,
    ]).then(() => {
        selectAll(res);
    });
});

module.exports = router;