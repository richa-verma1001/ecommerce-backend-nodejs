const UserService = require('../service/userService')
const bcrypt = require('bcrypt');

class UserController {

  async postUser(req, res){
    const {name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    try{
      const result = await UserService.createUser({name, email, password: hashedPassword});
      res.status(200).send(result);
    }catch(e){
      res.status(400).send(e);
    }
  }

  async getUserById(req, res){
    const id = req.params.id;
    try{
      const result = await UserService.getUserById(id);
      res.status(200).send(result);
    }catch(e){
      res.status(400).send(e);
    }
  }

  async getUsers(req, res){
    try{
      const result = await UserService.getUsers();
      res.status(200).send(result);
    }catch(e){
      res.status(400).send(e);
    }
  }

  async updateUser(req, res){

  }

  async deleteUser(req, res){
    try{
      const result = await UserService.deleteUser(id);
      res.status(200).send(result);
    }catch(e){
      res.status(400).send(e);
    }
  }  
}

module.exports = new UserController();