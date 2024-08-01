//Definição da classe ContaCorrente que herda da classe Conta
const Conta = require("./conta"); //importando a classe conta do arquivo ./conta.js

class ContaCorrente extends Conta { //criando a classe conta corrente
    constructor(titular, saldo = 0, juros = 0.02) { //definindo os atributos, que são específicos da conta corrente e os valores do juros e saldo inicial
        super(titular, saldo); //trazendo os atributos da conta pai
        this.juros = juros; //informando o valor específico da variável juros que será contabilizada
    }

    aplicarJuros() { //função de aplicação dos juros específicos da conta corrente
        const jurosCalculado = this.saldo * this.juros; //constante que calcula o valor caso o usuário queira aplicar os juros
        this.saldo += jurosCalculado; //soma do valor dos juros aplicados ao valor do saldo em conta
        console.log(`Juros de R$ ${jurosCalculado.toFixed(2)} aplicados. Novo saldo: R$ ${this.saldo}`); //imprimindo mensagem de aplicação dos juros e valor do saldo da conta corrente atualizado
    }
}

module.exports = ContaCorrente; //tornando a o arquivo da conta corrente exportável (será importada no menu)
