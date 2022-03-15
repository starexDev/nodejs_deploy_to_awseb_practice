const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`Hello World! ${process.env.PORT}`);
})

app.post('/test', (req, res) => {
    res.status(200).json({
        envport: `${process.env.PORT}`,
        port: port
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})