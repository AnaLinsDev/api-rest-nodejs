const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoutes')

const app = express()
const port = 3000  //http://localhost:3000/

app.use(bodyParser.urlencoded({ extended: false}))

userRoute(app)

app.get('/', (req,res)=> res.send('Olá, Mundo - Express'))

app.listen(port, () => console.log(`api rodando na porta: ${port}`))