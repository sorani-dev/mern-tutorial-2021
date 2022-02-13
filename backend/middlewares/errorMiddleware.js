const { response } = require("express")
const { request } = require("express")

/**
 * 
 * @param {Error} err 
 * @param {request} req 
 * @param {response} res 
 * @param {Function} next 
 */
const errorHandler = (err, req, res, next) => {
    console.log(res.statusCode)
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)

    res.jsonp({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    })
}

module.exports = errorHandler