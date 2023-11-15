var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const userModel = require('../models/user.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', async (req, res, next) => {
  const { id, name, email, password, role } = req.body;
  console.log(req.body);

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = {
      id,
      name,
      email,
      password: hashedPassword,
      role,
      assignedTasks: []
    }

    const result = await userModel.create(newUser);
    const {_id} = await result.toJSON();
    const token = jwt.sign({_id:_id}, "secret");
    res.cookie('jwt', token, {httpOnly: true, maxAge: 60*60*1000});
    res.status(200).json({msg: "User created successfully"});
    

  } catch (err) {

    if (err.code === 11000) {
      console.log("Email already exists");
      return res.status(400).json({ msg: "Email already exists" });
    } else {

      return res.status(500);
    }
  }



});

module.exports = router;
