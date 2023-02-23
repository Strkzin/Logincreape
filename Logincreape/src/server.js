import express from "express";

const app = new express();

app.get('/usuarios', (req, res) => {
    con.query ('SELECT * FROM usuarios ORDER BY id',(err, result) => {
        if(err) {
            res.send(err)
        }
        res.send(result);
    })
})

app.listen('3030', () => {
    console.log('Ok');
})