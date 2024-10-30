function getLivros(req, res) { 
    try {
        res.send("Oi mae!") // request e response
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

module.exports = {
    getLivros
}