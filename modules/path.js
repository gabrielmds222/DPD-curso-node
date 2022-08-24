const path = require("path");

// Basename -> Apenas o nome do arquivo atual
console.log(path.basename(__filename));

//dirname -> Nome do diretório atual
console.log(path.dirname(__filename));

// extname -> Extensão do arquivo
console.log(path.extname(__filename));

//parse -> Cria objeto path
console.log(path.parse(__filename));

//join -> Junta caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste2.html"));
