const prompt = require("prompt-sync")(); //importando o prompt, que será usado para entrada de informações
const Vilao = require("../Personagens/vilao") //importando o objeto Vilão através do arquivo que o contém

//Construindo a fase 1

function lutar(heroi){ //criando a função de luta, que será utilizada ao longo da fase 1
    console.log("Pronto ou não, a luta começou...");
    console.log();
    const vilao = new Vilao(100, 50); //construindo a função que cria um novo vilão e atribui a ele os valores definidos entre os parênteses, lembrando que em vilão contém 'vida' e 'forcaAtaque'
    while(heroi.vida > 1 && vilao.vida >1){ //defininfo um laço de repetição que acontece enquanto a variável 'vida' de ambos os personagens for maior que 1 (na lógica, se chegar a 0 ou menor que isso, acabou a vida)
        vilao.defender(heroi.atacar()); //o valor gerado pelo ataque do herói através da função 'atacar', vai gerar impacto no 'defender' do vilao, ou seja, o valor de referência que será descontado na quantidade de vida do vilão, será o valor gerado pela função 'atacar'
        heroi.defender(vilao.atacar()); //mesma coisa do que acontece acima, só que com o herói
        //isso vai acontecer de forma repetida até que a vida de um deles seja totalmente menor que 1.
        console.log(`Vida do ${heroi.nome}: ${heroi.vida}.`); //mostra a vida de cada um a cada repetição até que uma delas atinja 0 ou menos.
        console.log(`Vida da criatura: ${vilao.vida}.`);
        console.log();
    }
    
    if(heroi.vida <1){ //if que verifica quem foi o ganhador da luta, nesse momento, se a vida do heroi for menor que 1, quer dizer que ele perdeu (para perder a vida precisa ser 0 ou menos)
        console.log(`A criatura venceu essa luta!`) //mensagem caso o vilão ganhe
        return false; //retorna falso para fins de parâmetro ao decorrer do código (o retorno true ou falso determina se o jogador segue jogando ou recebe um "GAME OVER")

    }else{ //se não ocorrer o de cima, ou seja, se a vida do vilão que for menor que 1, então o herói ganhou.
        console.log(`${heroi.nome} venceu essa luta!`) //mensagem de vitória
        return true; //retorno true da função para que o jogador avance quando o código verificar se o retorno é true ou false.
    }
}

//crinado a função já dentro do module.exports, pois será utilizada apenas uma vez

//forma alternativa de criar uma função:
module.exports = (heroi) => { //dentro do parênteses está o objeto heroi (o que foi criado no início de jogo), pois é o parâmetro da função
    let luta = false; //criando a variável de luta que contêm o contexto da luta e os caminhos a serem seguidos em caso de vitória e derrota
    
    console.log(`Passadas algumas horas, já era noite e ${heroi.nome} percebeu uma movimentação muito estranha próxima de onde ele estava.`);
    console.log(`"O que será que tem aqui? Não parece coisa boa..." exclamou ${heroi.nome}, realmente a energia do lugar estava mais pesada.`);
    console.log();
    if(prompt("Vai ficar por aqui e descobrir ou prefere tentar sair de fininho sem ser percebido? F- Ficar ou S- Sair: ").toUpperCase() == "F"){ //if dentro do prompt para respostas que serão utilizadas apenas uma vez dentro da linha do código
        //criando a função de verificação com opções para o usuário, se ele digitar 'f', o código segue:
        console.log();
        console.log(`"MEU DEUS, que péssima ideia!" Sem que pudesse perceber, uma figura enorme e horrenda surgiu atrás de ${heroi.nome}...`)
        console.log(`Sem ter muitas opções, ${heroi.nome} entendeu que teria que enfrentar a criatura para continuar vivo.`)
        console.log();
        luta = lutar(heroi); //chamando a função lutar criada acima que retorna o true ou false

    }else{ //caso o jogador não digite 'f', e sim 's' segue o código:
        console.log(`"Vou sair bem de mansinho, estou fugindo de problemas", disse ${heroi.nome} enquanto procurava um caminho alternativo para que pudesse passar sorrateiramente.`);
        console.log();
        console.log(`Quando menos espera, ${heroi.nome} é surpreendido por uma criatura enorme e horrenda, não deu tempo nem de pensar...`);
        console.log(`"O que diabos é isso??!", foi a única coisa que deu tempo de falar.`);
        console.log();
        luta = lutar(heroi);//chamando a mesma função lutar já que em qualquer das escolhas do usuário, ele vai lutar do mesmo jeito.
    }
    if(luta){ //criando a verificação do retorno da função 'lutar', em caso de ser true, segue o seguinte código:
        heroi.restaurar(); //chamamos a função de restaurar, que atribui valor '100' a vida do heroi
        heroi.deposito(50); //chamando a função 'deposito' que adiciona 50 moedas na conta do heroi
        console.log();
        console.log(`Além de ganhar a luta, ${heroi.nome} ganhou 50 moedas, parabéns!`);
        heroi.status(); //chamando a função que retorna os atributos do herói para o jogador ver.
        return true //vai retornar verdadeiro (Será utilizado no index.js para validar a fase1 e definir se avança ou perde o jogo)

    }else{ //caso o retorno da função 'lutar' não seja true e sim false (ou seja, se o heroi perde a luta)
        return false //vai retornar falso (Será utilizado no index.js para validar a fase1 e definir se avança ou perde o jogo)
    }
}   