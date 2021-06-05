const express = require("express");
const methodOverride = require("method-override");
const cors = require('cors')
const userRouter = require("./controllers/userRouter");
const jewelRouter = require("./controllers/jewelryRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors())


app.get('/', (req, res) => {
  res.send('Home')
  // res.redirect('/users/')
})

app.use("/users/", userRouter);
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