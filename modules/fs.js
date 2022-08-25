const fs = require("fs");
const path = require("path");

// mkdir -> Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    console.log("Erro: ", error);
  }

  console.log("pasta criada com sucesso");
});

// writeFile -> Criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso");
  }
);
