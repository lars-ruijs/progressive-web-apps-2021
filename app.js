import express from 'express';
import { homeRout } from './routes/overview.js';
import { astroDetailRoute, roverDetailRoute } from './routes/detail.js';

// Create a express app
const app = express();

// listen for request
app.listen(3000);

// Views engine
app.set('view engine', 'ejs');

// Set static file directory
// Source: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Home page (overview)
app.get('/', homeRout);

// Detail page astronomy
app.get('/astronomy/:date', astroDetailRoute);

// Detail page rover
app.get('/rover/:name/:sol', roverDetailRoute);

// 404 page
// Source: https://expressjs.com/en/starter/faq.html
app.use((req, res) => {
    res.status(404).render('404', { title: "404 Not Found" });
});