const mongoose = require('mongoose');

// Connect to the database
const connectToDb = async () => {
    try {
        // Disable strict query mode
        mongoose.set('strictQuery', false);

        // Connect to the MongoDB server using the MONGO_URL environment variable
        await mongoose.connect(process.env.MONGO_URL);

        console.log('Database connected');
    } catch (error) {
        console.log('Database connection error:', error);
    }
};

module.exports = { connectToDb };
