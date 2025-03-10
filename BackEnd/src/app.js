const express = require('express')
const app = express()
const cors = require('cors')

const aiRoutes = require('./routes/ai.routes')   // AI related routes import kar rahe hain

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send('hello world');
})

// AI routes ko /ai endpoint pe connect kiya
// Yaha pe hum ai.routes.js ke saare routes ko /ai ke neeche attach kar rahe hai.
// Matlab, ab URL banega:  http://localhost:3000/ai/get-response
app.use('/ai', aiRoutes)

module.exports = app
