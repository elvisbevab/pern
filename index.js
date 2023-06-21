import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 3004;

app.route('/').get((req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
