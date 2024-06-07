require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://ecomern:HI3r7DIkRZSQxUGw@cluster0.y4tkmvi.mongodb.net/ecomernn?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})

//HI3r7DIkRZSQxUGw