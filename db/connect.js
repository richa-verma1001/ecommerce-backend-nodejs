const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((data) => {
  console.log('connection successful');
}).catch((err)=> {
  console.log('connection not established' + err);
});

// const connectDB = async () => {
//     try {
//         await mongoose.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB');
//     } catch (err) {
//         console.error('Failed to connect to MongoDB', err);
//         process.exit(1); // Exit the process with failure
//     }
// };

module.exports = mongoose;
