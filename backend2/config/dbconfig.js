// const mongoose = require('mongoose');

// const connectDB = async (dbURI) => {
//   if (!dbURI) {
//     console.error('Error: Database URI is not provided');
//     process.exit(1);
//   }

//   try {
//     await mongoose.connect(dbURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully');
//   } catch (err) {
//     console.error(`MongoDB Connection Error: ${err.message}`);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
