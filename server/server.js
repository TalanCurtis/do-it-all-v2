require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const massive = require('massive')
const app = express()

// connection string to database
const CONNECTION_STRING = process.env.CONNECTION_STRING
massive({connectionString: CONNECTION_STRING}).then(db => app.set('db', db))

// massive({})

// controller imports
const test_controller = require('./controllers/test_controller')

// top level middlewar.
app.use(bodyParser.json())

// middle ware.

// endpoints
// test controller endpoints
app.get('/api/test', test_controller.testGet)
app.get('/api/testDB', test_controller.testGetDB)

// app.get('/api/testDB', (req, res) => {
//     app.get('db').testGetAll().then((responseFromDB) => {
//       res.status(200).json(responseFromDB)
//     })
//   });

const port = process.env.SERVER_PORT || 3002
app.listen(port, ()=>{console.log(`listening on port ${port}`)})
