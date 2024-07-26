console.log("Hello World"); /*console. log é a forma de escrever no terminal*/

//'var' variável de escopo global(definida dentro do programa e funciona no programa inteiro, basta chamar)
var numero =10;

var nome = "Athos";

var teste = true;

console.log(nome) //mostrando no terminal a variável que estiver dentro dos parênteses
console.log(typeof(nome)) //vendo qual o tipo da variável.

//'let' variável de escopo local(geralmente utilizada dentro de funções e laços, funciona localmente)


//Arrays
//ao invés de adicionar dado por dado de cada aluno, por exemeplo, podemos criar listas que contenham as mesmas informações(nome, idade etc...)
var nome = "Athos";
var idade = 22;
var sexo = "M";
var altura ="170"
var peso = "65kg"

//criando uma lista com a variável nomes com a 'lista de nomes'
var nomes = ["Athos", "Victor", "Izabella","Hannah","Davi"];
console.log(nomes);
//o js permite adicionar dados de diferentes tipos, exemplo: strings e números na mesma lista.

//adicionando mais um item a lista da variável nomes.
nomes.push("Bianca")
console.log(nomes)

//posição começa em 0 (posição zero é o primeiro número)

console.log(nomes[0]) //acessando o item da posição 0

//Funções do Arrays

console.log(nomes.indexOf("Athos")) //pesquisando na lista pelo conteúdo(id)
//caso não tenha essa informação dentro da lista ele retorna '-1'

console.log(nomes.pop()); //remove o último item da lista e me retorna esse item
console.log(nomes); //mostrando a lista novamente para visualizar sem o nome removido

console.log(nomes.splice(1,1)) //defino os item que quero apagar, podendo apagar vários de uma vez, nessa caso estou apagando apenas o item 1(o segundo nome), por isso '1 até 1'
console.log(nomes)

nomes.forEach((value, index) => { //laço de repetição, ou seja, vai rodar para cada item da lista, de acordo com a quantidade de itens
    console.log(index+1+" "+value); //para cada item vai mostrar o index(posição) e o valor(nesse caso os nomes)
//o mais 1 é apenas para começar em 1 ao invés de 0
})

console.log(nomes.length); //quantidade de itens da lista

console.log(nomes.filter((value) => value.length<6)) //conta quantas letras tem cada item da lista e retorna apenas os itens que tem menos de 6 letras.
//value é o conteúdo da lista, cada item

