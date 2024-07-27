//Operadores básicos matemáticos (+, -, *, /, **, %)
//Operadores lógicos (>, <, >=, <=, ==, !=) retornam verdadeiro e falso

console.log(9>8); //retorna 'verdadeiro'
console.log(6+3); //retorna o resultado

//Estruturas de repetição: for, while, dowhile
for (let i=0; i<100; i++){ //para cada i de 0 a 100, sendo menor que 100, somar a poisção atual mais 1(++ serve pra isso)
    console.log(i); //vai mostrar de 0 a 99 (que dá 100 já que começa em 0)
}

let = teste = true;
let numero = 0;
while(teste){ // precisa ser criado uma condição de parada
    if(100<=numero){
        teste = false //quando chegar em 101, ele sai da condição e para, já que é para numeros menores ou igual a 100.
    }
    console.log(numero)
    numero ++;
}

teste = true
do {
    if(numero <=1){ //o último número do laço anterior é 101, para essa função, ele vai chegar até o 1, que é o número estabelecido
        teste = false; //bascicamente vai pegar o 101 e ir diminuindo de um em um até chegar no próprio 1;
    }
    console.log(numero);
    numero--;
    
} while (teste);