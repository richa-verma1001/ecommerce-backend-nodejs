const mongoose = require('../db/connect');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

