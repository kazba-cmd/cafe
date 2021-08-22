const express = require('express');
const mongoose = require('mongoose');
// const users = 
const cors = require('cors');
const config = require('./app/config');

const app = express();
const port = 8000;

const corsOptions = {
    origin: config.db.url + ':3000',
    optionsSuccessStatus: 200
};

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect(config.db.url + '/' + config.db.name, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.use('/shops', shops());

    app.listen(port, () => {
        console.log(`Server started on port ${port}!`);
    });
    console.log('Mongoose connected!');
};

run.catch(console.log);