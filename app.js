// Import dotenv with ES6 modules via https://github.com/motdotla/dotenv/issues/89#issuecomment-587753552
import 'dotenv/config.js';
import compression from 'compression';
import express from 'express';
import { router } from './routes/router.js';

// Create a express app
const app = express();
const port = process.env.PORT || 3000;

// Set static file directory
// Source: https://expressjs.com/en/starter/static-files.html
// Use Compression to enable GZIP compression
app
    .set('view engine', 'ejs')
    .use(compression())
    .use(express.static('dist'))
    .use('/', router)
    .listen(port);