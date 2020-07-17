const express = require('express');
const ip = require('ip');
const app = express();
const port = 8080;

const data = require('./data') ;
const counts = require('./data/counts.json')



app.get('/', (req, res) => {
    res.send("Hello world");
    res.end();
})

app.get('/:keyword', (req,res ) =>{
    console.log(req.params);
    res.status(200).type('json').json(data[req.params.keyword]);
})

app.get('/channel/:id', (req, res) => {
    console.log(req.params);
    res.status(200).type('json').json(counts[req.params.id]);
})


app.listen( port, () =>{
    console.log(`Now you can send requests on...\n\n \t 
        %cLocal: \t\t http://localhost:${port}
        %cOn Your Network: http://${ip.address()}:8080`, 'font-weight:bold', 'font-weight:bold');
}
)