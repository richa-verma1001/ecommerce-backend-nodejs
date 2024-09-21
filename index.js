const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('get /');
  res.send('<p>Test Response</p>');
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
})

