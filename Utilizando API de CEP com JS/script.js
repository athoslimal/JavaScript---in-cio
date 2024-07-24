window.onload = function(){
    document.getElementById("cep").addEventListener("focusout", function(){
        pesquisaCep(this.value) //o 'this' é o valor dentro da caixa do cep. quando clicar fora ele passa esse valor para a função 'pesquisaCep'.
    })
}

function limpa_formulario(){ //definindo função que limpa o conteúdo dos botões do formulario
    document.getElementById("rua").value=("");
    document.getElementById("numero").value=("");
    document.getElementById("bairro").value=("");
    document.getElementById("cidade").value=("");
    document.getElementById("estado").value=("");

}

function meu_callback(conteudo){ //definindo a função do call back, para retornar o valor de busca do cep no site via cep para o meu site
    if(!("erro" in conteudo)){ //se não tiver erro no conteúdo (!- a negação)
        document.getElementById("rua").value=(conteudo.logradouro); //puxando os dados do 'conteudo' conforme os nomes correspondentes na API do site viacep
        document.getElementById("bairro").value=(conteudo.bairro);
        document.getElementById("cidade").value=(conteudo.localidade);
        document.getElementById("estado").value=(conteudo.uf);
    }else{
        limpa_formulario();
        alert("CEP não encontrado.")
    }
}

function pesquisaCep(valor){
    /*alert(valor);*/ /*mostrando o valor capturado na função pesquisaCep, que no caso é o próprio cep que for preenchido, como um alerta*/
    
    
    var cep = valor.replace(/\D/g,'') //definindo uma variável com o valor recebido digitado no cep e colocando uma expressão do rejects que transforma em 0 informações que não são desejadas, por exemplo caracteres especiais
    if (cep != ""){ //verificando se o cep não é vazio para trabalhar a função rejects
        var validacep = /^[0-9]{8}$/; //padronização para validar o cep, números de 0 a 9, tamnho...
        
        //após validar esse cep, se ele estiver dentro dos padrões, ele vai preencher os campos de rua, bairro, cidade e estado
        if(validacep.test(cep)){  //fazendo ele testar o valor do cep
            document.getElementById("rua").value=("...");
            document.getElementById("bairro").value=("...");
            document.getElementById("cidade").value=("...");
            document.getElementById("estado").value=("...");

            var script = document.createElement("script") //criando uma variável que cria um elemento script
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback'; //chamando o script, conectando no site, passando a informação que será concatenada (cep).
            //quando disparar essa função, ele cria no html um script com o src(no caso o endereço url do site que contém o cep)
            //o call back é uma função de retorno (sai do site local, vai pro site do via cep e volta pro site local e mostra a informação a partir da função de retorno)
            
            document.body.appendChild(script); //adicionando ao document do site, no corpo, esse script criado acima
            //retorna essa informação no call back e chama essa função (call back) ao criar o script
            //o call back configurado e definido no início do código, trás os valores para os campos de preenchimento.
        
        }else { //se não for no formato definido:
            limpa_formulario();
            alert("Formato do CEP inválido");
        }

    }else {
        limpa_formulario(); //qualquer erro no cep ele chama a função de limpeza
    }
}