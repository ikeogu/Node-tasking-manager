

const express = require('express')
const app = express()
const tasks = require('./routes/task')

const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddlware = require('./middleware/errorhandler')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes


app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(errorHandlerMiddlware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGOOSE_URL)

    app.listen(port, () => {
      console.log('Server is up on port ' + port)
    })
  } catch (error) {
    console.log(error)
  }
}

start()



