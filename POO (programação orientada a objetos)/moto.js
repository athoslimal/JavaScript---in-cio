const Veiculo = require("./veiculo"); //criado automaticamente ao adicionar o 'extends'

class Moto extends Veiculo{ //criando a classe moto e importando a de veículo 
    constructor(marca, modelo, anofabricacao, tipo, combustivel, ocupantes, cilindrada){
        super(marca, modelo, anofabricacao, tipo, combustivel, ocupantes) //definindo os atributos que serão importados (todos) e chamando-os através do super
        this.cilindrada = cilindrada; //definindo atributo que não é comum a classe veículo
    }
    acelerar(){
        console.log("+10km/H");
    }
    //polimorfismo: já existe 'apresentação' em veículo, porém não contempla as cilindradas, dessa forma, colocando 'apresentacao' dentro do arquivo moto, ele considera apenas essa.
    apresentacao(){
        console.log(`${this.marca}, modelo: ${this.modelo}, ano: ${this.anofabricacao}, ${this.cilindrada} cilindradas.`);
    }
}

module.exports = Moto;