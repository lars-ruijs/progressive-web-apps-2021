import express from 'express';
import { getData } from './modules/helpers.js';

// Create a express app
const app = express();

// listen for request
app.listen(3000);

// Views engine
app.set('view engine', 'ejs');

// Set static file directory
// Source: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

const astronomyBase = "planetary/apod";
const roverBase = "mars-photos/api/v1/rovers/";
const rovers = ["Perseverance", "Curiosity", "Opportunity", "Spirit"];

app.get('/', async (req, res) => {
    const data = await getData(astronomyBase, "count=6");
    res.render('index', { title: "Home", subtitle: "This is a homepage!", data });
});

app.get('/test/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Hello from test! Your ID is ${id}`);
});

// 404 page
// Source: https://expressjs.com/en/starter/faq.html
app.use((req, res) => {
    res.status(404).render('404');
});