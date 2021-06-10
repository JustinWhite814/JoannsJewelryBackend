const express = require("express");
const methodOverride = require("method-override");
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')
const passportlocal = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
const userRouter = require("./controllers/userRouter");
const jewelRouter = require("./controllers/jewelryRouter");
const cookieParser = require("cookie-parser");
const User = require('./models/userModel')
const app = express();
// |----------------------------------------- Middle Ware -----------------------------------------|
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(session({
  secret: 'secretcode',
  resave: true,
  saveUninitialized: true
}))
app.use(cookieParser('secretcode'))
app.use(passport.initialize())
app.use(passport.session())
require('./passportConfig')(passport)
// |---------------------------------------- Middle Ware ----------------------------------------|


// |---------------------------------------- Registration Routes ----------------------------------------|
app.get('/', (req, res) => {
  res.send(`Welcome to the backend I think you're in the wrong place`)
})
app.get('/user', (req,res, next) =>{
  User.find({})
  .then((result) => res.json(result))
  .catch(next);
})




app.post('/login', (req,res, next) => {
passport.authenticate('local', (err,user,info)=>{
  if(err) throw err;
  if(!user) {
    res.send('No user Exists')
  }
  else {
    req.logIn(user, err =>{
      if(err) throw err;
      res.send('Successfully Authenticated')
    })
  }
})(req,res,next)
})
app.get("/user/:username", (req, res, next) => {
  User.findOne({ username: req.params.username })
    .then((result) => res.json(result))
    .catch(next);
});

// Update: Update a User's information
app.put("/user/:id", (req, res, next) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((result) => res.json(result))
    .catch(next);
});


app.post('/register', (req, res)=> {
  User.findOne({username: req.body.username}, async (err, doc)=>{
    if(err) throw err;
    if(doc) res.send("user already exists")
    if(!doc){
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
        firstName: req.body.firstname,
        lastName: req.body.lastName,
        username: req.body.username,
        password: hashedPassword,
      })
      await newUser.save()
      res.send('User Created')
    }
   })
  console.log(req.body)
})
// |---------------------------------------- Registration Routes ----------------------------------------|


// app.use("/user", userRouter);
app.use("/jewels/", jewelRouter);
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).send(message);
});


app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
  console.log(`Project 3 HOSTED on ${app.get('port')}`);
});