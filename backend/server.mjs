import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/NetflixData')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Define schema and model
const Schema = mongoose.Schema;
const MainModel = mongoose.model(
  'MainModel',
  new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  })
);

// CRUD operations
// Create
app.post('/api/yourmodels', async (req, res) => {
  const yourModel = new MainModel(req.body);
  await yourModel.save();
  res.send(yourModel);
});

// Read
app.get('/api/yourmodels', async (req, res) => {
  const yourModels = await MainModel.find();
  res.send(yourModels);
});

// Update
app.put('/api/yourmodels/:id', async (req, res) => {
  const yourModel = await MainModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(yourModel);
});

// Delete
app.delete('/api/yourmodels/:id', async (req, res) => {
  const yourModel = await MainModel.findOneAndDelete({ _id: req.params.id });
  res.send(yourModel);
});
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
