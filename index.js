const express = require('express');
const Datastore = require('nedb');
const cors = require("cors");
const { request } = require('express');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.listen(port, () => console.log('running at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();
app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.remove({}, { multi: true }, function (err, numRemoved) {});
  database.insert(data);
  response.json(data);
  console.log(data);
});

const hardware = new Datastore('hardware.db');
hardware.loadDatabase();

app.get('/hw', (request, response) => {
  hardware.find({}, (err, action) => {
    if (err) {
      response.end();
      return;
    }
    response.json(action);
  });
});

app.post('/hw', (request, response) => {
  const action = request.body;
  const timestamp = Date.now();
  action.timestamp = timestamp;
  hardware.remove({}, { multi: true }, function (err, numRemoved) {});
  hardware.insert(action);
  response.json(action);
  console.log(action);
});