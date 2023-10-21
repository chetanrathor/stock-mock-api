const { getPort, getMongoDbUrl } = require('../src/generator')
const express = require('express')
const app = express()
const stockRoutes = require('../src/routes/stock.routes')
const mongoose = require('mongoose')
const { ValidationError } = require('express-validation')
const cors = require('cors')
mongoose.connect(getMongoDbUrl()).then((result) => console.log("Database Connected Successfully.")).catch((e)=>console.log('e', e))

app.use(express.json())
app.use(cors())
app.use('/stocks', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
}, stockRoutes)
app.use(function (error, request, response, next) {
    if (error instanceof ValidationError) {
        return response.status(error.statusCode).json({ status: false, message: error.details.body[0].message })
    }

})
app.listen(getPort(), () => {
    console.log(`Application Is Running On Port ${getPort()}.`)
})