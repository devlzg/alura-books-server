const { getTodosLivros, getLivroPorId, modificaLivro, apagaLivroPorId } = require("../servicos/livro")
const { insereFavorito } = require("../servicos/favorito")

function getFavoritos(req, res) { 
     try {
        const livros = getTodosLivros("favoritos")
        res.send(livros) // request e response
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function getFavorito(req, res) { 
    try {
        const id = req.params.id
        if(id && Number(id)) {
            const livro = getLivroPorId(id, "favoritos")
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID invalido.")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }  
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            apagaLivroPorId(id, "favoritos")
            res.send("Livro apagado com sucesso.")
        } else {
            res.status(422)
            res.send("ID invalido.")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    getFavorito,
    postFavorito,
    deleteFavorito
}