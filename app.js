// Import dotenv with ES6 modules via https://github.com/motdotla/dotenv/issues/89#issuecomment-587753552
import 'dotenv/config.js';
import compression from 'compression';
import express from 'express';
import { router } from './routes/router.js';

// Create a express app
const app = express();
const port = process.env.PORT || 3000;

// Set static file directory. Source: https://expressjs.com/en/starter/static-files.html
// Use Compression to enable GZIP compression
// Force HTTPS connection. Source: https://docs.divio.com/en/latest/how-to/node-express-force-https/
app
    .enable('trust proxy')
    .set('view engine', 'ejs')
    .use(function(request, response, next) {

        if (process.env.NODE_ENV != 'development' && !request.secure) {
           return response.redirect("https://" + request.headers.host + request.url);
        }
    
        next();
    })
    .use(compression())
    .use(express.static('dist'))
    .use('/', router)
    .listen(port);