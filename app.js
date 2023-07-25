require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
app.use(express.json());

// controller
const stripeController = require('./controllers/stripe');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


// routes
app.get('/', (req, res) => {
  res.send('<h1> Stripe Api</h1>');
});

app.post('/stripe', stripeController);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
