const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', './templates');

app.get('/name', (req, res) => {
  res.render('name', { name: 'anuja' });
});

app.listen(8000, () => {
  console.log('listening on ', 8000);
});
