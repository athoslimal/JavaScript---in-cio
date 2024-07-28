//Resolvendo a primeira parte do programa, a entrada das notas

const prompt = require("prompt-sync")(); //importando a função do prompt
let notas = []; //criando o array para armazenar as notas (tornando escalável para que atenda a quantidade que precisar)


const numNotas = +prompt("Quantas notas serão registradas? "); //para que defina quantas vezes o programa vai precisar rodar a entrada e armazenagem de notas
//pode ser colada do lado de fora da função para que quando a função for chamada na recuperação, não precise digitar novamente quantas notas o programa vai receber, já a quantidade é a mesma

function capturanotas(){ //definindo a função para calcular as notas
    //const numNotas = +prompt("Quantas notas serão registradas? "); //para que defina quantas vezes o programa vai precisar rodar a entrada e armazenagem de notas

    for(let i = 0; i <numNotas; i++){ //fazendo o programa rodar para a quantidade de notas que o usuário quiser digitar
        notas.push(+prompt(`Digite a nota ${i+1}: `)); //adicionando a nota que vai ser solicitada pelo prompt na lista de notas
        //o + antes do prompt serve para informar que a entrada é numérica
        //o i+1 é para começar a contagem das notas em 1 e ir somando mais 1 até que chegue na quantidade que o usuário digitou0.
        }

    //criando o código de cálculo da média das notas

    let media = 0;
    notas.forEach((value) =>{ //para cada valor em 'notas', somar esses valores
        media += value; //média é igual a soma de todos os valores(notas)
    })
    media = media/notas.length; //divindo a soma de todas as notas(capturada pela variável 'media' acima) e dividindo pela quantidade de notas armazenadas(através do '.length')
    return media; //retornando o valor da média
}

//construindo a parte de decisão (onde o programa verifica se o aluno foi aprovado ou não)
//a função 'capturanotas' retorna o valor da média calculada pelas notas informadas

const media1 = capturanotas(); //chamando de media1 a função que vai retornar e média, para verificar se esse aluno foi aprovado

if (media1>=6){
    console.log(""); //dando um espaço vazio entre as linhas
    console.log(`Aluno aprovado com média: ${media1}`);
    console.log("Parabéns!");

}else{
    console.log("")
    console.log(`Aluno reprovado com média: ${media1}`);
    console.log("Encaminhado para recuperação.");
    console.log("");

    notas=[] //zerando as notas para que o programa considere apenas as notas da recuperação
    const media2 = capturanotas(); //chamando a função novamente para calcular as notas da recuperação, só que agora como 'media2', para saber se esse aluno passou na recuperação
    if (media2>=6){
        console.log("");
        console.log(`Aluno aprovado na recuperação com média: ${media2}`);
        console.log("Parabéns!");
        console.log("");

    }else{
        console.log(`Aluno reprovado na recuperação com média: ${media2}.`);
        console.log("");

    }
}