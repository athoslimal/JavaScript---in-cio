const prompt = require("prompt-sync")();

//Construindo a fase 3

function randomico(){ //criando uma função chamada randomico, que será utilizada para gerar valores aleatórios, que serão utilizados ao longo do arquivo
    const num = Math.floor(Math.random()*100); //definindo uma constante 'num' que vai receber um número aleatório com base na função random de 0 a 100
    if(num % 2 == 0){ //se o restante da divisão por 2 for 0, o número é par, portanto retorna true (o retorno será utilizado ao longo do código para definir o resultado de uma escolha)
        return true;
    }else{ //caso o número seja diferente do definido acima, ou seja, ímpar
        return false; //se o número divido por 2 não resultar em 0, ele é impar, portanto retorna false
    }
}

module.exports = (heroi) => { //criando a função dentro do module.exports como feito nas outras fases
    //contextualizando a história:
    console.log();
    console.log(`Nesse ponto da floresta tudo parecia mais calmo e mais tranquilo.`);
    console.log(`${heroi.nome} se depara com uma enorme clareira, repleta de frutas e frutos.`)
    console.log();
    if(prompt(`"Uau, são mesmo muitas opções!" E aí, decide colher e comer? S- Sim ou N- Não: `).toUpperCase() == "S"){ //trazendo opções de escolha para o usuário e verificando dentro do prompt qual foi a resposta digitada
        heroi.alimentar(10,20); //em caso da resposta ser 's', conforme a verificação acima, chama a função alimentar, que atribui os valores do parâmetro as variáveis relacionadas a ela, no caso 'fome' e 'vida' (conforme no arquivo 'heroi.js')
        heroi.status(); //mostra ao usuário o status do heroi através da função 'status'
        console.log(`"Isso estava divino!" Exclamou ${heroi.nome}.`)
    }else{ //caso a resposta não seja 's' mostra a mensagem:
        console.log(`"Estou cheio demais, realmente não preciso disso." Disse ${heroi.nome}.`)
    }
    //mais contexto da história
    console.log();
    console.log(`Alguma coisa chamou a atenção de ${heroi.nome} no meio das pedras, parecia uma espécie de sacola.`)
    console.log("Definitivamente tem algo interessante ali.")
    console.log();
    if(prompt(`Decide se aproximar e ver o que é? S- Sim ou N- Não: `).toUpperCase() == "S"){ //opção de escolha com verificação no prompt
        console.log();
        //caso a resposta seja 's' mostra a mensagem e depois entra no if que decide o que é que acontece a seguir
        console.log(`"Nossa! Isso definitivamente não é uma sacola." Disse ${heroi.nome} ao se apromixar e perceber que era uma bolsa grande e cheia.`);
        if(randomico()){ //chama a função 'randomico' que foi definida no início do código e caso o retorno seja true (caso o número gerado por ela seja par)
            heroi.restaurarvida(50); //chama a função restaurarvida com parâmetro '50' e soma à variável de vida
            heroi.deposito(50); //chama a função que soma a quantidade atribuída à variável de moedas
            console.log();
            console.log(`"Nossa, que sorte a minha!" Opa, boa decisão! ${heroi.nome} encontrou uma poção de restauração de vida e 50 moedas.`)
            heroi.status(); //mostra o status chamando a variável
        }else{ //em caso de o retorno fa função 'randomico' ser false (se for ímpar)
            heroi.defender(20); //chama a função que retira da variável de 'vida' do heroi e da 'forca' a quantidade dentro do parâmetro
            console.log();
            console.log(`"AAAAAAAAAH!" Puts, essa não foi uma boa decisão! ${heroi.nome} foi picado por uma cobra!`)
            heroi.status(); //mostra o status
        }
    
    }else { //em caso de a decisão do usuário ser diferente de 's':
        console.log();
        console.log(`"Melhor não me meter onde não fui chamado." Disse ${heroi.nome}.`)
        console.log("Boa decisão, quem garante que não havia uma cobra nessa bolsa, sabe-se lá o que pode acontecer.")
        console.log(); //mostra as mensagens acima e segue
    }

    //contexto da história para a próxima fase
    console.log(`De repente, uma luz muito forte surge na frente de ${heroi.nome}, o que é isso?`);
    console.log(`Simplesmente um portal se abriu ali no meio da clareira.`);
    console.log(`Sem nem pensar, ${heroi.nome} entra no portal que o leva para uma outra dimensão.`);
    console.log();
    //essa fase não tem retorno true ou false, pois através da estrutura do arquivo index.js, depois que acabar, chama a função da fase final, não tendo nenhuma verificação a ser feita, como aconteceu na fase anterior, pois não há outras opções a serem seguidas.
}