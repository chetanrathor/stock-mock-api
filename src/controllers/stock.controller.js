const { response } = require('express')
const { getAllStocks, addNewStock,getOne } = require('../services/stock.service')
const { getSuccessResponse, getFailureResponse } = require('../utils')
module.exports = {
    getStocks: async (request, response) => {
        try {
            const data = await getAllStocks()
            getSuccessResponse({ request, response, data })
        }
        catch (error) {
            getFailureResponse({ request, response, error })
        }
    },
    addStock: async (request, response) => {
        try {
            const { body } = request
            const data = await addNewStock(body)
            getSuccessResponse({ request, response, data })
        }
        catch (error) {
            getFailureResponse({ request, response, error })
        }
    },
    getOneStock: async (request, response) => {
        try {
            console.log('request', request)
            const {id}  = request.params
            const data = await getOne(id)
            getSuccessResponse({ request, response, data })
        }
        catch (error) {
            getFailureResponse({ request, response, error })
        }
    }
}