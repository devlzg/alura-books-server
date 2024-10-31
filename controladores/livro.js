const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, apagaLivroPorId } = require("../servicos/livro")

function getLivros(req, res) { 
     try {
        const livros = getTodosLivros("livros")
        res.send(livros) // request e response
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function getLivro(req, res) { 
    try {
        const id = req.params.id
        if(id && Number(id)) {
            const livro = getLivroPorId(id, "livros")
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

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        if (req.body.nome) {
            insereLivro(livroNovo, "livros")
            res.status(201)
            res.send("Livro inserido com sucesso!")
        } else {
            res.status(422)
            res.send("O campo 'nome' e obrigatorio")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            modificaLivro(body, id, "livros")
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("ID invalido.")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            apagaLivroPorId(id, "livros")
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
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}