//Aquirvo com a lógica do menu e interação com o usuário
const prompt = require('prompt-sync')(); //importando o módulo prompt-sync
const ContaCorrente = require('./contacorrente'); //importando o arquivo da conta corrente
const ContaPoupanca = require('./contapoupanca'); //importando o arquivo da conta poupança

let contaCorrente = null; //definindo a variável das contas mas sem um valor específico, utilizada para verificar se tem uma conta criada, por exemplo
let contaPoupanca = null;

//Função para criar uma conta corrente
function criarContaCorrente() { //definindo a função
    const titular = prompt('Digite o nome do titular da conta corrente: '); //pedindo o nome do usuário
    const saldoInicial = parseFloat(prompt('Digite o saldo inicial da conta corrente: ')); //pedindo o valor inicial da conta
    const novaConta = new ContaCorrente(titular, saldoInicial); //criando dentro da conta corrente os atributos informados acima, nome do titular e saldo
    console.log(`Conta corrente de ${titular} criada com sucesso! Saldo inicial: R$ ${saldoInicial.toFixed(2)}`); //mensagem de conta criada com nome e saldo inicial
    return novaConta; //retornando a informação da conta criada
}

//Função para criar uma conta poupança
function criarContaPoupanca() {
    const titular = prompt('Digite o nome do titular da conta poupança: ');
    const saldoInicial = parseFloat(prompt('Digite o saldo inicial da conta poupança: '));
    const novaConta = new ContaPoupanca(titular, saldoInicial); //criando dentro da conta poupança os atributos informados acima, nome do titular e saldo
    console.log(`Conta poupança de ${titular} criada com sucesso! Saldo inicial: R$ ${saldoInicial.toFixed(2)}`);
    return novaConta;
}

//Função principal para interação com o usuário
function main() {
    while (true) { //enquanto for verdade, ou seja enquanto o programa não for finalizado (com a opção sair), ele continua rodando as opções
        console.log('\n### Menu ###'); //mensagem informativa de título do menu
        console.log('1. Criar Conta Corrente'); //definição das opções:
        console.log('2. Criar Conta Poupança');
        console.log('3. Depositar');
        console.log('4. Sacar');
        console.log('5. Consultar Saldo');
        console.log('6. Aplicar Juros (Conta Corrente)');
        console.log('7. Aplicar Rendimento (Conta Poupança)');
        console.log('8. Sair');

        const opcao = parseInt(prompt('Digite a opção desejada: ')); //entrada de dados do usuário (resposta com a opção desejada, de 1 a 8)

        switch (opcao) { //definindo o que cada opção do menu faz, chamando cada função específica
            case 1:
                contaCorrente = criarContaCorrente();
                break; //chama a função e volta para o menu (quebra o switch e volta para o while depois que a função for executada)
            case 2:
                contaPoupanca = criarContaPoupanca();
                break;
            case 3:
                const valorDeposito = parseFloat(prompt('Digite o valor a ser depositado: ')); //entrada do valor a ser depositado
                const contaDeposito = prompt('Escolha a conta para depósito (C - Conta Corrente, P - Conta Poupança): ').toUpperCase(); //escolha da conta que será feita o depósito
                if (contaDeposito === 'C' && contaCorrente) { //se a resposta for igual a 'c' e se existir uma conta corrente cadastrada
                    contaCorrente.depositar(valorDeposito);//adiciona o valor informado ao saldo da conta corrente.
                } else if (contaDeposito === 'P' && contaPoupanca) { //se a resposta for igual a 'p' e se existir uma conta poupança cadastrada
                    contaPoupanca.depositar(valorDeposito); //adiciona o valor ao saldo da conta poupança
                } else {
                    console.log('Conta não encontrada.'); //se não existir conta cadastrada, imprime a mensagem de conta não encontrada. (as verificações de valores estão no corpo do código 'pai' conta) 
                }
                break;
            case 4:
                const valorSaque = parseFloat(prompt('Digite o valor a ser sacado: ')); //mensagem que recebe o valor a ser sacado
                const contaSaque = prompt('Escolha a conta para saque (C - Conta Corrente, P - Conta Poupança): ').toUpperCase(); //escolha da conta, tornando o que for digitado maiúsculo para que não haja problema se o usuário digitar c ou C, ou p e P
                if (contaSaque === 'C' && contaCorrente) { //se for digitado 'c' e existir conta corrente cadastrada
                    contaCorrente.sacar(valorSaque); //chama a função e faz o que estiver associado a ela (retira o valor do saldo caso atenda as verificações que estão na 'conta pai')
                } else if (contaSaque === 'P' && contaPoupanca) { //se for digitado 'p' e existir conta poupança cadastrada
                    contaPoupanca.sacar(valorSaque); //chama a função e faz o que estiver associado a ela
                } else {
                    console.log('Conta não encontrada.'); //caso não tenha conta cadastrada informa
                }
                break;
            case 5:
                const contaSaldo = prompt('Escolha a conta para consultar saldo (C - Conta Corrente, P - Conta Poupança): ').toUpperCase(); //constante de consulta de saldo, torna todos os elementos recebidos maiúsculos
                if (contaSaldo === 'C' && contaCorrente) { //se for igual a 'c' e existir conta corrente cadastrada
                    contaCorrente.consultarSaldo(); //chama a função de consulta de saldo e faz o que estiver associado a ela
                } else if (contaSaldo === 'P' && contaPoupanca) { //mesma coisa só que para conta poupança
                    contaPoupanca.consultarSaldo();
                } else {
                    console.log('Conta não encontrada.'); //caso não haja conta cadastrada
                }
                break;
            case 6:
                if (contaCorrente) { //se existir conta corrente cadastrada
                    contaCorrente.aplicarJuros(); //chama a função de aplicar juros e executa a função
                } else {
                    console.log('Crie uma conta corrente primeiro.'); //caso não tenha conta corrente cadastrada
                }
                break;
            case 7:
                if (contaPoupanca) { //se existir conta poupança cadastrada
                    contaPoupanca.aplicarRendimento(); //chama a função de aplciar rendimentos e executa a função
                } else {
                    console.log('Crie uma conta poupança primeiro.'); //caso não tenha conta corrente cadastrada
                }
                break;
            case 8:
                console.log('Saindo...'); //opção de sair digitada, exibe a mensagem e retorna, ou seja, sai do laço de repetição do while, finalizando a aplicação.
                return;
            default: //caso não seja digitada nenhuma das opções válidas:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}

//Iniciando a aplicação por meio da função main (menu)
main();
