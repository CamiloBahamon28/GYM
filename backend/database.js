const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        //useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
   
    })
    .then(() => {
        console.log('mongo connect');
    })
    .catch((err) => console.log(err));