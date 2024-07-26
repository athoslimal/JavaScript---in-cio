//Objetos
var pessoa = new Object(); //definindo um objeto para a variável pessoa
var listapessoas = [];

pessoa["nome"] = "Athos"; //atribuindo um nome e dando o nome para o objeto pessoa
pessoa["idade"]= 22;
pessoa["sexo"]="M";
pessoa["peso"]="65kg";
pessoa["altura"]= 1.70

console.log(pessoa); //mostrando essa variável(objeto)

listapessoas.push(pessoa); //adicionando o objeto a lista criada

var pessoa = new Object(); //toda vez que quiser adicionar um novo item a lista, é preciso passar a função new(novo objeto)
pessoa["nome"] = "Victor"; //atribuindo um nome e dando o nome para o objeto pessoa
pessoa["idade"]= 22;
pessoa["sexo"]="M";
pessoa["peso"]="65kg";
pessoa["altura"]= 1.73;

listapessoas.push(pessoa);
pessoa["idade"] = 23; //acessando um valor do objeto (idade) e alterando o conteúdo, independente do momento ele faz a troca

console.log(listapessoas);