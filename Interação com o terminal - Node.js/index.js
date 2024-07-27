const prompt = require("prompt-sync")(); //constante é uma variável que não varia (cria e armazena uma informação até o fim do programa)
//require trás a requisição, uma forma de importar, nesse caso o prompt-sync que foi instalado

const nome = prompt("Qual o seu nome? ");//pedindo a informação ao usuário
const idade = prompt("Qual sua idade? ");

console.log(`Seu nome é ${nome} e você tem ${idade} anos.`); //usando as crases para conseguir trazer a variável para o console(espécie de print), o '$' serve para trazer o conteúdo da variável
