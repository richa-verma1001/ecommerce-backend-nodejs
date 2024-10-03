const User = require('../model/userModel');

class UserService {
  async createUser(data){
    const newUser = new User(data);
    return await newUser.save();
  }

  async deleteUser(id){
    return await User.findByIdAndDelete(id);
  }

  async updateUser(id, data){
    return await User.findByIdAndUpdate(id, data);
  }

  async getUserById(id){
    return await User.findById(id);
  }

  async getUsers(){
    return await User.find();
  }
}

module.exports = new UserService();