//Promises Async Await
async function espera() { //criando uma função assincrona (ou seja, ela roda simultaneamente a outros códigos, ela não vai depender da ordem em que está o código)
    const promise = new Promise(resolve => {  //constante que recebe a promessa. ela precisa ser resolvida ou rejeitada (como se fosse um callback, resolve e trás um resultado)
        setTimeout(() => resolve(console.log("Demorei 3 segundos.")),3000) //tempo de espera para o processamento, assim que o resolve for resolvido, ele retorna a mensagem definida, depois do tempo definido
    });
    const esperando = await promise; //esse código serve para  eseperar a promise, ou seja, não vai rodar o restante do programa enquanto a promise não for resolvida
    console.log("Linha independente da função assíncrona.") //demonstrando que o código funciona simultaneamente.
} 

espera(); //chamando a função