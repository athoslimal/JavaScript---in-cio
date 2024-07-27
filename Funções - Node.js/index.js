//Funções

var listaPessoas = []; //criando a variável de lista de pessoas, onde armazenarei as pessoas

function criaPessoa(nome, idade, sexo){ //comando para criar e definir o nome da função (tipo any) e entre os parênteses estou atribuindo o valor de referência, que é o nome(variável definida em seguida:)
    let pessoa = new Object(); //criando uma variável local(que funciona dentro da função apenas) como um objeto

    pessoa["nome"] = nome;
    pessoa["idade"]= idade;
    pessoa["sexo"]= sexo;

    listaPessoas.push(pessoa); //passando as informações de 'pessoa'(nome, idade e sexo) para dentro da lista 'listaPessoas'

}

criaPessoa("Athos",22,"M"); //chamando a função e dando a informação para ser atribuída dentro dela
criaPessoa("Victor",22,"M"); //cada vez que eu chamo a função, ela roda tudo que tiver dentro dela para cada atributo que for listado.
criaPessoa("Izabella",22,"F");
criaPessoa("Hannah",22,"F");

console.log(listaPessoas);