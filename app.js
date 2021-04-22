const express = require('express'); // loading express library
const cors = require('cors'); // load CORS plugin
const path = require('path');

const app = express(); // instanciate express app
const port = 3000;

// var bodyParser = require('body-parser')

// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({
//    extended: false
//})


let posts = [];
let counter = 0;

app.use(cors()); // enable CORS for all requests
//app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// urlencodedParser
app.get('/', function (req, res) { 
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function (request, response) {
    let chat = {
        name: request.body.post.name,
        text: request.body.post.text,
        time: Date.now()
    };
    posts.push(chat)
    console.log(posts)
});

app.get('/hello', (req, res) => { // return random name
   /*  const names = ['Klaus', 'Bokhee', 'Dan', 'Marcella', 'Sabrina', 'Daniel'];
    let chat = {
        name: names[counter],
        time: "500"
    };
    posts.push(chat)
    counter++;
    */
    res.send(posts);
});

app.listen(port, () => { // listen to port on host
    console.log(`Example app listening at http://localhost:${port}`);
});

function updatePosts() {

}