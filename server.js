const express = require('express');
const app = express();
const port = 8080;

const data = require('./data') ;



app.get('/', (req, res) => {
    res.send("Hello world");
    res.end();
})

app.get('/data', (req,res ) =>{
    res.json(data);
    res.end();
})

app.listen( port, () =>{
    console.log(`listening on port ${port}.....`);
}
)