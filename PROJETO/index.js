//importando as funções que serão utilizadas ao longo do jogo
const prompt = require("prompt-sync")(); //importando o prompt
const Heroi = require("./Personagens/heroi"); //importando o Objeto 'Heroi' (no arquivo 'heroi')

const fase1 = require("./fases/fase1"); //definindo a constante da fase 1 e chamando a função do arquivo 'fase1'
const fase2 = require("./fases/fase2"); //definindo a constante da fase 2 e chamando a função do arquivo 'fase2'
const fase3 = require("./fases/fase3"); //definindo a constante da fase 3 e chamando a função do arquivo 'fase3'
const fasefinal = require("./fases/fasefinal"); //definindo a constante da fase final e chamando a função do arquivo 'fasefinal'


//Apresentação do jogo, contém apenas mensagens informativas sobre o jogo e o início da história
console.log("YOUR CHOICES - A TEXT GAME");
console.log();
console.log("Bem-vindo, jogador, a este belíssimo jogo texto!");
console.log();
console.log("O primeiro passo é construir o seu personagem.");
console.log();
console.log("Um herói desbravador, muito forte e corajoso vivia em uma vila que foi atacada e destruída por inimigos. Agora ele segue seu caminho traçando novas rotas e novas aventuras em busca de felicidade e paz!")

//Criação do personagem, entrada de informação (no caso o nome), definida como uma variável que será recebida através do que o usuário digitar.
console.log();
const nome = prompt("Qual será o nome dele? ");
const heroi = new Heroi(70, nome, 70, 50); //atribuindo ao novo heroi dentro do objeto 'Heroi', os atributos iniciais dele: vida, nome, fome e força iniciais
console.log();
console.log(`Personagem '${heroi.nome}' criado, o chamaremos assim daqui em diante.`); //Mensagem que trás o nome do herói informado pelo usuário através do '${}', que acessa na variável heroi, que contém o objeto 'Heroi', o nome que foi definido para ele.
console.log("Assim que seu personagem inicia o jogo:")
console.log();
heroi.status(); //trazendo a função que contém o status do herói criado, mostrando os atributos e seus valores
console.log();

//Ensinando a se alimentar
console.log(`Parece que o ${heroi.nome} está sem muita energia, já que está há dias caminhando.`);
console.log();
if (prompt("Deseja comer uma fruta? S- Sim ou N -Não: ").toUpperCase() == "S"){ //trazendo dentro do if a resposta, já que será utilizada apenas aqui, não tem necessidade de ser uma variável
    console.log();
    console.log(`"Essa fruta realmente estava boa!" disse ${heroi.nome}.`)
    heroi.alimentar(5,2); //Passando para a função alimentar os valores que serão adicionados nos atributos (a função alimentar soma esse valor com o valor atual)
    console.log();
    heroi.status(); //mostrando ao usuário o status agora que ele se alimentou

}else if(prompt("Deseja caçar e comer uma carne? S- Sim ou N -Não: ").toUpperCase() == "S"){ // else dentro do if: caso a resposta não seja sim, dá uma outra opção ao usuário, novamente já verificando a resposta dentro do prompt (assim que receber a reposta)
    console.log();
    console.log(`"Essa carne realmente estava boa!" disse ${heroi.nome}.`)
    heroi.alimentar(10,5); //passando para a função alimentar os valores que serão adicionados nos atributos respectivamente.
    console.log();
    heroi.status(); //mostrando o status
}else{ //caso não queira alimentar o personagem de forma alguma (caso seja não para as duas opções de cima), não chama nenhuma função, apenas mostra essa mensagem:
    console.log();
    console.log(`O ${heroi.nome} não aumentou seus níveis de fome e vida!`)
}
console.log();

//Ensinando a melhorar o condicionamento (força):
console.log(`Pelo caminho, ${heroi.nome} avistou um enorme lago e resolveu se aproximar.`)
console.log();
console.log("Parece haver algo muito brilhoso dentro desse lago, o que será que é?")
console.log();
if(prompt("Deseja nadar e verificar do que se trata todo esse brilho na água? S- Sim ou N- Não: ").toUpperCase() == "S"){ //novamente, o prompt dentro do if, já verifica a resposta no momento em que for digitada e confirmada, já que vai ser utilizada apenas uma vez.
    heroi.treinar(10); //caso a resposta seja positiva, chama a função 'treinar' dentro da constante 'heroi' (que contém o objeto 'Heroi') e passa o valor 10 como referência, nesse caso a função treinar adiciona força ao heroi.
    console.log();
    console.log(`"Parecia mais interessante de longe!" Ao pegar o item brilhoso, ${heroi.nome} percebeu que não se tratava de nada além de uma latinha de refrigerante.`)
    console.log();
    console.log(`Logo após, ${heroi.nome} retornou à margem do lago, se secou e continuou seu caminho.`)
    heroi.status(); //acessa a função 'status' da constante heroi que resulta em uma mensagem com os atributos e quantidades
}else{ //caso a decisão não seja positiva, informa a mensagem e segue a história:
    console.log();
    console.log(`"Ufa!", disse ${heroi.nome}, a água parecia muito fria para nadar...`)
}
console.log(); //essas linhas ao longo do código servem apenas para adicionar espaço entre os textos do jogo.
console.log(`Depois de um tempo de caminhada, ${heroi.nome} avistou uma enorme árvore.`)
console.log(`No topo dessa árvore parecia ter um ninho cheio de moedas...`)
console.log();
if(prompt(`Será que ${heroi.nome} vai se arriscar para subir e verificar? S- Sim e N- Não: `).toUpperCase() == "S"){ //prompt dentro do if para captar a resposta e fazer a verificação.
    console.log();
    console.log(`"Uau, que sorte!", parece que ${heroi.nome} encontrou 6 moedas dentro do ninho!`) //caso resposta positiva
    heroi.deposito(6); //chamando a função 'deposito' dentro da constante heroi que atribui valores a quantidade de moedas (nesse caso, soma 6 com o que já tem no atributo)
    heroi.treinar(15); //chama a função 'treinar' dentro da constante heroi e atribui o valor dentro dos parênteses como parâmetro para a função (soma no atributo força do heroi)
    heroi.status(); //mostra o status para que o usuário saiba como estão os atributos do heroi criado
}else{
    console.log();
    console.log(`${heroi.nome} ignorou o que estava vendo e só seguiu o seu caminho.`)
    console.log();
    console.log("Sem melhora nas atividades físicas, o personagem está ficando meio fraco.")
}
//Fim da introdução

console.log();
const f1 = fase1(heroi); // definindo o nome da constante que recebe a função da 'fase 1', ela precisa ser diferente de fase1 e fase2 pois já foram utilizados esses termos no início (para importar os arquivos das fases)
// a constante 'heroi' sempre dentro dos parênteses pois é o parâmetro para a função continuar entendendo que se trata do mesmo heroi criado e manter todos os seus atributos ao longo do jogo, se não for definida a função não funciona pois não tem onde atribuir os valores ao longo do jogo

if(f1){ //se f1 for verdadeiro (retorna o resultado da fase1), ou seja, caso o final da fase 1 retorne 'true', ele segue essa sequência (o final da fase 1 é se ele vence ou não uma luta)
    
    const f2 = fase2(heroi); //definindo a constante da fase2 que retorna a fase 2, caso ela seja verdadeira (retorne true).
    
    if(f2){ // verificando se 'f2' retorna true, ou seja, se o retorno do final da fase 2 for true, o jogador vai direto para a fase final, o resultado depende da escolha e do retorno que essa escolha trás (true ou false)
        fasefinal(heroi); //sendo retorno true, chama a função da fase final, sempre atribuindo o heroi, para que tenha referência dos atributos ao longo de todo o jogo.

    }else{ //caso o retorno da função seja 'false'
        fase3(heroi); //chama a função da fase 3, sempre refenciando o heroi, e ao final da fase 3, chama a função da fase final
        fasefinal(heroi);
    }

}else{ //caso o usuário não passe da fase 1 ou perca na fase final, ele cai no else, que printa uma mensagem de 'game over'
    console.log();
    console.log("GAME OVER!")
    
}