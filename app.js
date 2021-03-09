import express from 'express';
import { getData, randomNum, getDate } from './modules/helpers.js';

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
    const astronomyData = await getData(astronomyBase, "count=6");
    
    // Fetch the max sol (max date) for each rover > fetch photo data for random sol > push to array
    const roverData = [];

    for (const rover of rovers) {
      const roverInfo = await getData(`${roverBase + rover}`);
      const maxSol = roverInfo.rover.max_sol;
      const data = await getData(`${roverBase + rover}/photos`,`sol=${randomNum(maxSol)}`);

      // If no pictures for this sol > fetch for sol 1
      if(data.photos.length == 0) {
        const defaultData = await getData(`${roverBase + rover}/photos`,`sol=1`);
        roverData.push(defaultData);
      }
      // Else, push data to array.
      else {
        roverData.push(data);
      }
    }
    res.render('index', { title: "Home", astronomyData, roverData, getDate });
});

app.get('/astronomy/:date', async (req, res) => {
    const date = req.params.date;
    res.send(`Hello from test! Your requested date is ${date}`);
});

// 404 page
// Source: https://expressjs.com/en/starter/faq.html
app.use((req, res) => {
    res.status(404).render('404', { title: "404 Not Found" });
});