const express = require('express')
const app = express()
const cors = require('cors');
const dbConnect = require('./db');
app.use(cors());
app.use(express.json());

const empolyeeRoutes = require('./Routes/empolyeeRoutes');
// Connect to MongoDB
dbConnect();


// Routes
app.get('/', (req, res) => {
    res.send('API is running...')
})
app.use('/empolyee', empolyeeRoutes);


// Start server
app.listen(5000, () => {
    console.log('API is running on port  http://localhost:5000')
})