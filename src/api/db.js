require('dotenv').config({ path: '../../.env' })

const mongoose = require('mongoose');
const db_url = process.env.DB_URL
// Connect to MongoDB
const dbConnect = async () => {
    try {
        await mongoose.connect(db_url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;