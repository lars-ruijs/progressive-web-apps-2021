const express = require('express');

const app = express();

// listen for request
app.listen(3000);

// Views engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: "Home", subtitle: "This is a homepage!"});
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