const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');


dotEnv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/auth', require('./routes/authRoute'));
app.use('/api/v1/companies', require('./routes/companiesRoute'));


app.get('/', (req, res, next) => {
 
  res.send("API ");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server1 listening on port ${PORT}`);
});



// error handler middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});