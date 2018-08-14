const express = require('express');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));
app.use((req,res,next) => {
  console.log(`${req.method} ${req.url}`);
  next();
})

app.get('/', (req,res) => {
  res.send('Hello World!')
});

app.get('/about', (req,res) => {
  res.render('about.hbs', {
    pageTitle: 'About',
    currentYear: new Date().getFullYear()
  });
});

app.listen(4000);
