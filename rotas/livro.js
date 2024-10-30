const { Router } = require("express")
const { getLivros } = require("../controladores/livro")

const router = Router()

router.get("/", getLivros)

router.post("/", (req, res) => {
    res.send("requisicao POST")
})

router.patch("/", (req, res) => {
    res.send("requisicao PATCH")
})

router.delete("/", (req, res) => {
    res.send("requisicao DELETE")
})

module.exports = router // exporta o router para os outros arquivos
                        // poderem usar