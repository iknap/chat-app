const express = require('express'); // loading express library
const cors = require('cors'); // load CORS plugin
const path = require('path');

const app = express(); // instanciate express app
const port = 3000;

// middleware searches for matching file in given folder -> in this case 'static'
app.use(express.static('static'))
// enable CORS for all requests
app.use(cors());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// In Memory DB
let posts = [];

// .json sends json
app.get('/allPosts', (req, res) => {
    res.json(posts);
});

app.get('/lastPost', (req, res) => {
    res.json(posts[posts.length - 1]);
});

app.post('/post', (req, res) => {
    let chat = {
        name: req.body.post.name,
        text: req.body.post.text,
        time: Date.now()
    };
    posts.push(chat)
    res.status(204).end()
});

app.use((error, req, res) => {
    console.log(error)
    res.status(500).end()
})

app.listen(port, () => { // listen to port on host
    console.log(`Example app listening at http://localhost:${port}`);
});