//Entendendo POO
//Definindo montagem de classes (arquivos que serão chamados de objeto)
//por exemplo, um objeto carro, tem várias características necessárias que representam o carro (atributos e métodos também)
//nesse arquivo é criada e definida apenas a classe

const Veiculo = require("./veiculo"); //foi gerada automaticamente a importação quando foi digitado o 'extends' abaixo

class Carro extends Veiculo{ //iniciando uma classe carro e trazendo a classe de veículo com o 'extends'
    //construtor: termo que define os atributos e define o 'carro' (nesse caso é um carro)
    constructor(marca, modelo, anofabricacao, tipo, combustivel, ocupantes, numPortas){
        /*this.marca = marca; //this.marca representa algo interno (o contexto dentro do construtor), existe apenas dentro da classe
        this.modelo = modelo;// o this refencia o atributo que foi criado para o carro que for adicionado
        this.anofabricacao = anofabricacao;
        this.tipo = tipo;
        this.combustivel = combustivel;*/ //o carro não precisa mais ter essas informações, pois elas estão contidas no aquivo veículo
        super(marca, modelo, anofabricacao, tipo, combustivel, ocupantes) //comando de parâmetro para trazer os atributos de veículo (dentro do parêntese estão todos os atributos da classe veículo que serão adicionados a carro)
        this.numPortas = numPortas;
    }

    acelerar(){
        console.log("+5km/H");
    }
}

module.exports = Carro; //exportando a classe 'Carro' que foi criada aqui nesse arquivo.
