const prompt = require("prompt-sync")(); //mais uma vez, importando o prompt para entrada de dados

//Construindo a fase 2

//criando a função dentro do module.exports, dessa forma não precisamos definir nome.
module.exports = (heroi) => { //dentro do parênteses está o objeto heroi (o que foi criado no início de jogo), que é o parâmetro da função
    //contexto da história por meio de textos:
    console.log(`Depois da luta exaustiva, mas que trouxe ótimas recompensas, ${heroi.nome} pôde seguir seu caminho em paz.`);
    console.log();
    console.log(`Muito tempo caminhando e finalmente foi avistado um vilareijo muito bem estruturado. ${heroi.nome} não podia conter a ansiedade ao se aproximar.`);
    console.log(`Chegando ao vilareijo, se deparou com um espécie de barraca, onde um senhorzinho estava sentado.`);
    console.log(`${heroi.nome} decidiu se aproximar para ver do que se tratava.`)
    console.log(`Já em frente a barraca e praticamente ao lado do senhozinho, pôde perguntar: "O que temos aqui?"`);
    console.log();
    console.log(`"Muitos viajantes, assim como você, passam por aqui. Tenho tudo que precisam!" Disse o senhorzinho.`);
    console.log(`"Como assim tudo o que precisam?" perguntou ${heroi.nome}.`);
    console.log(`"Poções mágicas de cura, responde sua pergunta? Hahaha." Respondeu ele.`);
    console.log("Ele pegou uma caixinha muito bonita e ao mesmo tempo discreta, abriu em sua frente, como se fosse um segredo.");
    console.log(`"Você parece cansado, que tal essa poção de força por apenas 10 moedas?" Perguntou ele logo após apontar para uma das poções.`);
    console.log(`Seu saldo de moedas é: $ ${heroi.moedas}`); //mostrando ao usuário a quantidade de moedas que estão atribuídas ao heroi.
    console.log();

    if(prompt("S- Sim ou N- Não: ").toUpperCase() == "S"){ //criando a verificação da resposta dentro do prompt que recebe a resposta do usuário
        if(heroi.moedas >= 10){ //caso seja digitado 's', o 'toUpperCase torna a resposta maiúscula para que não haja diferença na entrada de dados entre 's' e 'S'
            //if dentro do if que vai verificar se o jogador tem moedas suficientes atribuídas ao seu personagem através ho 'heroi.moedas', se for maior que 10, ele pode comprar
            heroi.saque(10); //chamando a função saque, que retira a quantidade que está no parâmetro (10, que é o preço da poção) da quantidade total de moedas (função definida no arquivo do herói)
            heroi.treinar(20); //chama a função 'treinar' que adiciona 20 ao atributo de força do heroi (também está no arquivo do heroi)
            heroi.status(); //chama afunção status para o jogador ver as mudanças
        }else{ //em caso de a quantidade de moedas não ser maior que 10, mostra a mensagem de moedas insuficientes.
            console.log("Poxa, não há moedas suficiente para comprar a poção.")
        }

    }else{ //em caso de o usuário não desejar comprar, ou seja, digitar 'n'.
        console.log();
        console.log(`"Acho que não preciso disso..." Disse ${heroi.nome}`); //motra a mensagem 
        console.log();
    }
    
    if(prompt(`"E que tal uma poção de vida por 20 moedas?" Apontando para outra poção. S- Sim ou N- Não: `).toUpperCase() == "S"){ //dá ao jogador outra opção de compra, independente da escolha feita anteriomente
        if(heroi.moedas >= 20){ //verifica se o jogador tem a quantidade mínima (no caso a poção em questão custa 20 moedas)
            heroi.saque(20); //novamente, se tiver pelo menos 20 moedas atribuídas, desconta do valor que há em 'moedas' do heroi
            heroi.restaurarvida(20); //restaura a vida através da função 'restaurarvida', que soma o valor informado ao valor que já existe na variável de vida relacionada ao herói
            heroi.status(); //mostra ao usuário o status do seu personagem.
        }else{ //em caso de não haver moedas suficientes, ou seja, se tiver menos de 20 moedas:
            console.log();
            console.log("Poxa, não há moedas suficiente para comprar a poção.") //mostra a mensagem
            console.log();
        }
    }else{ //o else serve para respostas diferentes da estabelecida no if, nesse caso diferentes de 's'
        console.log();
        console.log(`"Acho que estou bem assim, obrigado!" Disse ${heroi.nome}.`); //mostra a mensagem
        console.log();
    }
    //continuação da história
    console.log(`${heroi.nome} acenou para o senhorzinho e seguiu seu caminho.`)
    console.log();
    console.log(`Seguindo com sua caminhada de destino incerto, ${heroi.nome} se depara com outra escolha a fazer.`);
    console.log(`À sua frente, duas opções de estrada, ambas muito parecidas, para onde vai ${heroi.nome}?`);
    console.log();

    if(prompt(`Ir pela direita ou pela esquerda? D- Direita ou E- Esquerda: `).toUpperCase() == "D"){ //chamando o prompt para entrada de dados dentro do if para já fazer a verificação, evitando usar variáveis, e também novamente o 'touppercase'
        console.log();
        console.log(`${heroi.nome} decidiu seguir o caminho da direita e encontrou um portal mágico depois de algumas horas andando.`);
        console.log("Sim, ele entrou.");
        console.log();
        return true //criando um retorno verdadeiro, ou seja, se a resposta for 'd', como definida pelo if, ao final, retorna true, que será utilizado no arquivo index.js para decidir qual o caminho do jogador. (no caso, se digitar 'd', ele avança para a fase final, está no 'index.js')

    }else{ //caso a resposta seja diferente de 'd', ao final, retorna false, fazendo o usuário ir para a fase 3 (definido no arquivo index.js)
        console.log();
        console.log(`${heroi.nome} decidiu seguir o caminho da esquerda, onde permaneceu andando por algumas horas.`);
        return false //o retorno desse else é false
    }
}

