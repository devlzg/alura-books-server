const fs = require("fs")

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    
    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {
    insereFavorito,

}