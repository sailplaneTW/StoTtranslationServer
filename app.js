const express = require('express')
const opencc = require('node-opencc');
const app = express()
const port = 5473

app.get('/:text', (req, res) => {
    let text = req.params.text
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ text: opencc.simplifiedToTraditional(text) }));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
