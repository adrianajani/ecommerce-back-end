const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Error handling middleware for JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON');
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  next();
});

// Routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});