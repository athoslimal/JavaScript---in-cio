//montando o objeto com os atributos que foram definidos, passando os atributos que serão adicionados

const Carro = require('./carro'); //importando o arquivo carro, para que os atributos sejam adicionados
const Moto = require('./moto');

const carro = new Carro("Ferrari","488 PISTA","2022","Sport","Gasolina", 5, 4); //ao criar um novo carro, ele já trás os atributos

const moto = new Moto("BMW","GTX1650", 2022, "Sport", "Gasolina", 2, 1500)

console.log(carro);
carro.apresentacao();
carro.acelerar();

console.log(moto);
moto.apresentacao();
moto.acelerar();
carro.validacao();//chamando a função de verificação
carro.padronizacao(); //chamando a função de padronização
console.log(carro); //exibindo a listagem de atributos do carro e verificando se a marca está em letras maiúsculas.

