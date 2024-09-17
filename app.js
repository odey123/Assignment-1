const express = require ('express')
const connectDb = require ('./config/db')
const todoRoutes = require('./routes/todo');

require('dotenv').config()

const app = express()
app.use(express.json())

connectDb();


app.use(`/todos`, todoRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:4000`)
})
