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

// app.get('/api', (request, response) => {
//   database.find({}, (err, data) => {
//     if (err) {
//       response.end();
//       return;
//     }
//     // const data1 = request.body;
//     response.json(data);
//   });
// });

// app.post('/api', (request, response) => {
//   const data = request.body;
//   const timestamp = Date.now();
//   data.timestamp = timestamp;
//   database.insert(data);
//   response.json(data);
// });
app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    // const data1 = request.body;
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




// app.get('/auth', (request, response) => {
//   database.find({}, (err, userdata) => {
//     if (err) {
//       response.end();
//       return;
//     }
//     response.json(userdata);
//   });
// });

// app.post('/auth', async (request, response) => {
//   try {
//     const hashedPassword = await bcrypt.hash(request.body.password, 10)
//     const userdata = { name: request.body.name, password: hashedPassword }
//     authdb.insert(userdata);
//     response.json(userdata);
//     response.status(201).send()
//   } catch {
//     response.status(500).send()
//   }
// })