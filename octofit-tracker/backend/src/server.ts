import express from 'express';
import './config/database.js';

const app = express();

app.use(express.json());
app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

const port = 8000;
app.listen(port, () => {
  console.log(`OctoFit API listening on port ${port}`);
});