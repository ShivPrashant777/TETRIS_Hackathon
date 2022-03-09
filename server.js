const express = require('express')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.use(express.json({extended: false}))

app.get('/', (req, res) => {
    res.json({msg: 'Hello'})
})

// Define Routes
app.use('/api/college', require('./routes/college'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server Started on PORT: ${PORT}`)
})
