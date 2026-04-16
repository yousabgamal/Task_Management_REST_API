require('dotenv').config();
const taskRoute = require('./routs/tasksRouts');
const userRoute = require('./routs/usersRouts');
const mongoose = require('mongoose');
const express =  require('express');
const app = express();

mongoose.connect(process.env.CONNECTION_LINK)
.then(() => console.log('Server connected successfully.'))
.catch((err) => console.log(Error(err)));

app.use(express.json());
app.use('/task', taskRoute);
app.use('/user', userRoute);

app.listen(process.env.PORT_NUMBER, () => {
  console.log('Server is running on port number' , process.env.PORT_NUMBER)
})