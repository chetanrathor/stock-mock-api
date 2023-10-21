const { getPort, getMongoDbUrl } = require('./src/generator')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { ValidationError } = require('express-validation')
const cors = require('cors')
const { getStocks, addStock, getOneStock } = require('./src/controllers/stock.controller')
const { validate } = require('express-validation')
const { addNewStock, getOneStockValidation } = require('./src/validations/stock.validation')
mongoose.connect(getMongoDbUrl()).then((result) => console.log("Database Connected Successfully.")).catch((e)=>console.log('e', e))

app.use(express.json())
app.use(cors())

app.get('/api',(req,res)=>{
    res.send("hello world")
})

app.get('/api/stocks', (request, response) => getStocks(request, response))
app.post('/api/stocks', validate(addNewStock), (request, response) => addStock(request, response))
app.get('/api/stocks/:id',(request,response)=>getOneStock(request, response))

// app.use('/api/stocks', stockRoutes)

app.use(function (error, request, response, next) {
    if (error instanceof ValidationError) {
        return response.status(error.statusCode).json({ status: false, message: error.details.body[0].message })
    }

})
app.listen(getPort(), () => {
    console.log(`Application Is Running On Port ${getPort()}.`)
})

module.exports = app