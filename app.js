// Import dotenv with ES6 modules via https://github.com/motdotla/dotenv/issues/89#issuecomment-587753552
import 'dotenv/config.js';
import express from 'express';
import { homeRoute } from './render/overview.js';
import { astroDetailRoute, roverDetailRoute } from './render/detail.js';

// Create a express app
const app = express();
const port = process.env.PORT || 3000;

// listen for request
app.listen(port);

// Views engine
app.set('view engine', 'ejs');

// Set static file directory
// Source: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Home page (overview)
app.get('/', homeRoute);

// Detail page astronomy
app.get('/astronomy/:date', astroDetailRoute);

// Detail page rover
app.get('/rover/:name/:sol', roverDetailRoute);

app.get('/offline', (req, res) => {
    res.render('offline', { title: "Offline" });
});

// 404 page
// Source: https://expressjs.com/en/starter/faq.html
app.use((req, res) => {
    res.status(404).render('404', { title: "404 Not Found" });
});