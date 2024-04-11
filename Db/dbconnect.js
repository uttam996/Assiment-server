const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const ConnectDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to the database successfully! 🚀\n',
        process.env.MONGO_URI
    );
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = ConnectDB;