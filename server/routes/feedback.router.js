const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
    console.log(`/feedback POST API endpoint`, req.body);

    const feedback = req.body;
    const sqlText = 
        `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
            VALUES ($1, $2, $3, $4);`;
    
    pool.query(sqlText,
         [
            feedback.feelings,
            feedback.understanding,
            feedback.support,
            feedback.comments
        ])
        .then((result) => {
            console.log(`Added feedback to DB!`, feedback);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error adding feedback to DB!`, err);
            res.sendStatus(500);
        });
})

module.exports = router;