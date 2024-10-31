const express = require("express");
const cors = require('cors');

const app = express();
const port = 8000;
const rotaLivro = require("./rotas/livro.js");

app.use(cors('http://localhost:3000'));
app.use(express.json())

app.use("/livros", rotaLivro);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
