const {User} = require('../models');

module.exports = {
  async register (req, res) {
    try {
      let newUser = await User.create(req.body);
      res.send(newUser.toJSON());
    } catch (err) {
      res.status(400).send({error: 'Failed to register new user. Try another email.'})
    }
  },
  async login (req, res) {

  }
};