const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loggerMiddleware = require('./middlewares/logger');
const notesRouter = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(loggerMiddleware);

// MongoDB'ye bağlan
mongoose.connect('mongodb://localhost:27017/notesapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Not rotalarını kullan
app.use('/notes', notesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
