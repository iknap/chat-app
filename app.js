const express = require('express'); // loading express library
const cors = require('cors'); // load CORS plugin

const app = express(); // instanciate express app
const port = 3000;

app.use(cors()); // enable CORS for all requests

app.get('/hello', (req, res) => { // return random name
    const names = ['Klaus', 'Bokhee', 'Dan', 'Marcella', 'Sabrina', 'Daniel'];
    const randomName = names[Math.floor(Math.random()*names.length)];
    res.send(randomName);
});

app.listen(port, () => { // listen to port on host
    console.log(`Example app listening at http://localhost:${port}`);
});