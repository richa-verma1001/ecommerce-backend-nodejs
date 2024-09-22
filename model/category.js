const mongoose = require('../db/connect');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

