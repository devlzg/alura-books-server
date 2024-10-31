const { Router } = require("express")
const { getFavoritos, getFavorito, postFavorito, deleteFavorito } = require("../controladores/favorito")

const router = Router()

router.get("/", getFavoritos)

router.get("/:id", getFavorito)

router.post("/:id", postFavorito)

router.delete("/:id", deleteFavorito)

module.exports = router // exporta o router para os outros arquivos
                        // poderem usar