const mongoose = require('../db/connect');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String, 
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if(!validator.isEmail(value)){
        throw new Error("Email is invalid");
      }
    }
  },
  password: {
    type: String, 
    required: true,
    trim: true, 
    validate(value){
      if(value.toLowerCase().includes('password')){
        throw new Error("Password cannot contain password")
      }
    }
  },
  age: {
    type: Number, 
    default: 0,
    validate(value){
      if(value < 0){
        throw new Error('Age must be a positive number')
      }
    }
  }
});
userSchema.pre('save', async function(next) {
  const user = this;

  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;