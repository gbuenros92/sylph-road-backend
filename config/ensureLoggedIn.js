module.exports = (req, res, next) => {
    if (!req.trainer) return res.status(401).json('Unauthorized')
    next()
}