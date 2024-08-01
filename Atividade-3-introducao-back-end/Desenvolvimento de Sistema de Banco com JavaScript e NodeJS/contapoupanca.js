//Definição da classe ContaPoupanca que herda da classe Conta
const Conta = require("./conta");//importando a classe conta do arquivo ./conta.js

class ContaPoupanca extends Conta { //criando a classe conta poupança
    constructor(titular, saldo = 0, rendimento = 0.03) { //definindo os atributos, que são específicos da conta poupança e os valores de rendimento e saldo inicial
        super(titular, saldo); //importando da conta pai os atributos em comum
        this.rendimento = rendimento; //informando o valor específico da variável rendimento que será contabilizada
    }

    aplicarRendimento() { //função que aplica os redimentos, caso seja solicitada pelo usuário
        const rendimentoCalculado = this.saldo * this.rendimento; //cálculo do rendimento com base no valor dele e do saldo em conta poupança
        this.saldo += rendimentoCalculado; //soma dos valores do rendimento e do saldo
        console.log(`Rendimento de R$ ${rendimentoCalculado.toFixed(2)} aplicado. Novo saldo: R$ ${this.saldo}`); //mensagem com o valor do rendimento e o valor do saldo atualizado com a soma
    }
}

module.exports = ContaPoupanca; //tornando a o arquivo da conta poupança exportável (será importada no menu)