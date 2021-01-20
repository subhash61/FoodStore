const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 8000;

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DATABASE is successfully connected....');
  })
  .catch((err) => {
    console.log(err);
  });
const server = app.listen(port, () => {
  console.log(`App is running on this ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION !!! Shutting down....');
  server.close(() => {
    process.exit(1);
  });
});
