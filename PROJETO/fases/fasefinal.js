const prompt = require("prompt-sync")(); //importando o prompt
const Vilao = require("../Personagens/vilao") //importando o vilão

//Construindo a fase final

function luta(heroi){ //criando a função de luta que será utilizada ao longo da fase
    const vialofinal = new Vilao (150,50); //definindo a constante 'vilaofinal' como um novo objeto Vilao, ou seja, chamando o objeto Vilao e seus atributos, para criar um outro vilão
    let rodada = 1; //deifinindo a variável de rodada que inicia em 1, que será utilizada para mostrar as rodadas da luta ao jogador.

    while(heroi.vida >1 && vialofinal.vida >1){ //criando o while que define que, enquanto a variável 'vida' do heroi for maior que 1, e a variável 'vida' do vilão criado também for maior que 1, ele continua o laço de repetição
        console.log(`${rodada}ª Rodada`); //chama o conteúdo da variável e mostra na mensagem qual a rodada em questão está acontecendo
        console.log();
        const golpeheroi = g20(); //criando a constante que trás uma função ('g20' está definida e explicada logo abaixo)
        const golpevilao = g20(); //chamando a mesma função que será utilizada para ambos (tanto para o heroi, quanto para o vilão)
        //são duas constantes pois vão resultar em valores específicos quando agiram sobre cada um dos personagens
        console.log(`Golpes do ${heroi.nome}: ${golpeheroi}.`); //mostrando a intensidade do "golpe" de ambos os personagens durante a luta (serão definidos pela função g20)
        console.log(`Golpes do inimigo: ${golpevilao}.`);
        console.log();
        console.log(`Vida do ${heroi.nome}: ${heroi.vida}.`); //mostrando a vida de cada um dos personagens
        console.log(`Vida do inimigo: ${vialofinal.vida}.`);

        if(golpeheroi>=golpevilao){ //se o valor do golpe do heroi for maior ou igual ao golpe do vilão:
            vialofinal.defender(heroi.atacar()); //o 'defender' do vilão (função que subtrai da 'vida' e da 'forca') recebe como referência o valor da função 'atacar' do herói.
        
        }else{ //se o golpeheroi não for maior ou igual ao golpevilao
            heroi.defender(vialofinal.atacar()); //acontece o mesmo do if acima, só que com o heroi (o valor de referência definido pela função atacar é removido da 'vida' e da 'forca' do heroi)
        }
        prompt("Aperte ENTER para a próxima rodada.");
        rodada ++; //cada vez ele vai somar 1 ao número definido no valor da variável 'rodada' e mostrar (como começa em 1, ao fim de cada laço de repetição ele soma mais 1 e mostra a próxima, 2, 3 até que atinja a condição de parada)
    
        //de forma resumida, o valor do golpe varia de 1 a 20, esse valor será utilizado a cada ciclo de repetição, quem tiver o maior golpe, leva vantagem nas rodadas, pois quando o golpe de um é maior que o do outro, quem tiver o golpe menor, sofre dano na vida, que vai ficando cada vez menor, e ao atingir um número menor que 1, sai do laço de repetição e dá a vitória pra quem ainda está vivo.
    
    }

    if(heroi.vida>1){ //definindo o if que retorna true, que será utilizado ao final da fase. Se a quantidade de vida do heroi for maior que 1, quer dizer que ele está vivo (já que a repetição do while só para quando uma das vidas não for mais maior que 1)
        return true; //será usada para definir se o jogados ganha o jogo
    }else{ //se a vida do heroi não for maior que um ao fim do while (ou seja, a vida do heroi é menor que 1 e a do vilão é maior)
        return false //retorna false (será usado como parâmetro para definir se o jogador perde o jogo)
    }
}

function g20(){ //criando a função que será utilizada como parâmetro para o valor do golpe de cada personagem
    let num = Math.floor(Math.random() *21); //criando a variável que gera um numero aleatório de 0 a 20 (21 números) através do random, e arredondando esse número através do math
    if(num == 0){ //colocando um if para caso um dos números gerados seja 0, se torne 1, já que não é bom para a lógica de uso que seja 0
        num += 1; //somando o mais 1 que torna o 0 = 1
    }
    return num //retorna um número gerado pela função (que será o número usado no parâmetro do golpe de cada personagem)
}

//criando o contexto da história e a fase final dentro do exports
module.exports = (heroi) => { //criando a função que será exportada 
    console.log("O tempo não foi suficiente nem mesmo para que pudesse contá-lo, num piscar de olhos um ambiente totalmente diferente surgiu em sua frente.");
    console.log();
    console.log(("Um abiente agitado, repleto de pessoas e muito grande."));
    console.log(`Foram necessários alguns segundos para que ${heroi.nome} percebesse que estava em uma arena de batalha e que as pessoas na arquibancada estavam como platéia da luta que aconteceria.`);
    console.log();
    console.log(`"Meu Senhor, onde foi que eu vim parar?!", Foi tudo que conseguiu dizer.`);
    console.log();
    console.log(`Eram tantas informações, que ao tentar processar uma, já aparecia outra.`);
    console.log("E foi nesse momento que um enorme portão de ferro se abriu, e de lá saiu uma criatura ainda mais horrenda que aquela vista na floresta.");
    console.log("A platéia foi a loucura, o barulho era tanto que estava difícil não enlouquecer.");
    console.log();
    console.log(`${heroi.nome} estava se dando conta aos poucos de onde tinha se metido, mas ainda não entendia o porquê.`);
    console.log();
    console.log(`A tal criatura estava se aproximando cada vez mais, e ao chegar perto, analisando ${heroi.nome} dos pés a cabeça, disse:`);
    console.log(`"Então é você? HAHAHAHA, essa pobre criatura vai me enfrentar?"`);
    console.log(`"Pensava que não tinha sobrado nada dessa rua raça traidora. Mas vejo que você também não vai dar muito trabalho"`);
    console.log();
    console.log(`Um barulho parecido com um sino foi disparado. O som da platéia e do sino foram fucientes para que ${heroi.nome} juntasse A+B e entendesse que se tratava do início da luta`);
    console.log();
    console.log(`"É, não tenho pra onde ir...Só espero ter força o suficiente para acabar com essa coisa feia!"`);
    console.log(`Foi tudo que disse ${heroi.nome} antes da criatura vir pra cima.`);
    console.log();
    if(luta(heroi)){ //chama a função da luta criada no início do código e de acordo com o retorno dela (true ou false) define o que acontece no código
        heroi.deposito(1000); //se o retorno for true, conforme definido na linha acima, chama a função 'deposito' que soma o valor do parâmetro a variável 'moedas'
        heroi.restaurar(); //chama a função restaurar, que atribui valores de 100 para alguns atributos do heroi (que é o parâmetro da função luta, tudo que acontecer dentro desse if é relacionado ao heroi)
        console.log();
        console.log("Parabéns, você chegou ao fim do jogo e venceu! Como recompensa seus atributos foram restaurados e você ganhou 1000 moedas.");
        heroi.status(); //mostra as mensagens e o status do personagem e finaliza o jogo
        console.log(("Espero que tenha gostado dessa história, até a próxima!"));
        console.log();
        console.log(("Jogo texto desenvolvido por Athos Lima"));
    }else{ //caso o retorno da função luta seja false (ou seja, se o heroi perdeu a luta), mostra a mensagem de game over e finaliza o jogo.
        console.log();
        console.log("GAME OVER!");
    }
}