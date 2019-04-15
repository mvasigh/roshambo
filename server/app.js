const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    hello: 'world'
  });
});

io.on('connection', socket => {
  console.log(`New connection ID: ${socket.id}`);

  socket.on('load message', (firstName, secondName, fn) => {
    fn(`${firstName} loves ${secondName}`);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

// Default to 3000 if no port is provided as environment variable
const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
