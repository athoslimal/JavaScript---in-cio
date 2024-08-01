//Definição da classe base Conta que vai armazenar informações como nome e saldo
class Conta {
    constructor(titular, saldo = 0) { //iniciando o saldo em zero
        this.titular = titular; //definindo os 'valores' das variáveis de resposta, para receber o valor dentro de cada campo específico
        this.saldo = saldo;
    }

    depositar(valor) { //criando a função de depósito e colocando o valor como referência
        if (valor > 0) { //Colocando condição de verificação para que o valor seja válido (não se pode depositar 0 reais ou menos)
            this.saldo += valor; //atualizando o valor do saldo através da soma do valor do depósito com o valor que já tiver na conta
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`); //imprimindo mensagem de depósito com as variáveis de valor depositado e saldo atualizado (ambas com apenas 2 casa decimais, já que se trata de moeda)
        } else {
            console.log('Valor do depósito deve ser maior que zero.'); //caso o valor não seja menor que 0 (no código ele vai perguntar antes em qual conta deseja depositar, após receber essa informação ele mostra essa mensagem caso o valor não seja válido) 
        }
    }

    sacar(valor) { //criando a função de saque
        if (valor > 0 && valor <= this.saldo) { //se o valor do saque for maior que 0 e se for menor ou igual ao valor que tiver na conta 'this.saldo', ele segue
            this.saldo -= valor; //retira do saldo o valor informado
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`); //mensagem de valor sacado e valor do saldo atualizado
        } else {
            console.log('Saldo insuficiente para saque ou valor inválido.'); //caso o valor não seja suficiente (se for maior que o saldo), ele imprime a mensagem de saldo insuficiente
        }
    }

    consultarSaldo() { //função de consulta de saldo
        console.log(`Saldo atual da conta de ${this.titular}: R$ ${this.saldo.toFixed(2)}`); //apenas imprime o nome do cliente e o valor do saldo em conta
    }
}

module.exports = Conta; //tornando o aquirvo ./conta.js exportável.