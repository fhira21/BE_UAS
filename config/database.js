const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://fhiratriana:pIE5f762RAgE4beX@fhira21.t04fohl.mongodb.net/?retryWrites=true&w=majority&appName=Fhira21', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    console.error('Error Details:', err);
    process.exit(1);
  }
};

connectDB();

module.exports = connectDB;
