const express = require('express');
const cors = require('cors');
const { connectToDb } = require('./db/db');
const { readdirSync } = require('fs');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));

// Start the server
const server = () => {
    connectToDb(); // Connect to the database
    app.listen(PORT, () => {
        console.log('Listening on port:', PORT);
    });
};

server();
