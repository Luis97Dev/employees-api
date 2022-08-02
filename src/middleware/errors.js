
const errorHandler = (err, req, res, next) => {
    console.log(`[ERROR]: ${err.message}`)
    const status = err.status || 400
    
    res.status(status).send({ error: err.message });
}

module.exports = errorHandler