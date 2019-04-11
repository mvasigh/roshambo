const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

const port = process.env.PORT || 3000;
app.listen(port, err => {
  if (err) console.error(err);
  console.log(`Server listening on port ${port}`);
});
