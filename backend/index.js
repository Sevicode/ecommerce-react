const express = require('express');
const app = express();

const dotenv = require("dotenv")
dotenv.config();

const mongoose = require('mongoose');
mongoose
    .connect (process.env.MONGO_URL)
    .then(() => console.log('DBConnection Successful!'))
    .catch((err) => {console.log(err)
    })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

