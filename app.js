const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1.0' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});
module.exports.handler = serverless(app);