const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL;
console.log(url);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((data) => {
  console.log('Connection Successful');
}).catch((err)=> {
  console.log('Connection not established' + err);
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
