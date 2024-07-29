function contar (valor){ //variável criada com parâmetro de valor
    let temp = 0; //criando a variável zerada
    for (let i=0; i<valor; i++){ //laço que repete o número de vezes que for passado para ele
        temp +=i //vai fazer as somas enquanto tiverem números (o que foi definido)
    }
    return temp; //retornando o resultado
}

async function teste(){ //criando a função
    let resposta = await contar(1111); //espera rodar a função 'contar' para depois executar as linhas a seguir:
    console.log("Sou independente da async");
    console.log(resposta); //retornando a respota, que no caso é a função 'contar'
}

teste();