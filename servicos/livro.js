const fs = require("fs")

function getTodosLivros(arquivo) {
    return JSON.parse(fs.readFileSync(`${arquivo}.json`))
}

function getLivroPorId(id, arquivo) {
    const livros = JSON.parse(fs.readFileSync(`${arquivo}.json`))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id, arquivo) {
    let livrosAtuais = JSON.parse(fs.readFileSync(`${arquivo}.json`))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync(`${arquivo}.json`, JSON.stringify(livrosAtuais))
}

function apagaLivroPorId(id, arquivo) {
    const livros = JSON.parse(fs.readFileSync(`${arquivo}.json`))

    const livrosFiltrados = livros.filter( livro => livro.id !== id)

    fs.writeFileSync(`${arquivo}.json`, JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    apagaLivroPorId
}