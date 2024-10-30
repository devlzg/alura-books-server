const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, apagaLivroPorId } = require("../servicos/livro")

function getLivros(req, res) { 
     try {
        const livros = getTodosLivros()
        res.send(livros) // request e response
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function getLivro(req, res) { 
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro) // request e response
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }  
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        modificaLivro(body, id)
        res.send("Item modificado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        apagaLivroPorId(id)
        res.send("Livro apagado com sucesso.")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}