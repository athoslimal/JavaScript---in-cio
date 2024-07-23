//depois de criado o html, definida a estrutura do site, faremos o script

//aqui definiremos o que o botão criado que está na estrutura html "calcular" fará:
window.onload = function(){ //assim que a janela for carregada, a função será ativada
    document.getElementById("calcular").addEventListener("click", function(){ //assim que a função for disparada (de cliclar no botão, vou chamar outra função:)
        num1 = document.getElementById("num1").value; //recuperando o num1 do html de acordo com o id e informando que quero capturar o valor dele pelo '.value'
        num2 = document.getElementById("num2").value;

        //nos dois de cima, a variável recebe o valor 'value' que for digitado pelo usuário, no de baixo o value recebe o valor da soma dos dois, não de algo informado pelo usuário
        document.getElementById("result1").value = parseInt(num1) + parseInt(num2); //estou acessando o result através do document.getelemtbyid (id) e dando um valor para ele.
        //o parseInt serve para definir o valor da variável num1 e num2 como números inteiros, para que ele some e não junte os elementos.
    })

    document.getElementById('num4').addEventListener("focusout", function(){ //quando o foco do campo do número 4 for perdido, ou seja, quando selecionar fora desse campo depois de preeche-lo, ativa a função:
        num3 = document.getElementById("num3").value;
        num4 = document.getElementById("num4").value;
   
        document.getElementById("result2").value = parseInt(num3) - parseInt(num4);
    })

    document.getElementById('num6').addEventListener("focusout", function(){
        num5 = document.getElementById("num5").value;
        num6 = document.getElementById("num6").value;
   
        document.getElementById("result3").value = parseInt(num5) * parseInt(num6);
    })

    document.getElementById('num8').addEventListener("focusout", function(){
        num7 = document.getElementById("num7").value;
        num8 = document.getElementById("num8").value;
   
        document.getElementById("result4").value = parseInt(num7) / parseInt(num8);
    })

    elemento = document.getElementById("num1"); //isolando o elemento para criar a função legível ao programa
    //o elemento é o espaço 'num1'
    elemento.addEventListener("click", function(){
        elemento.value = ""; //ao clicar no elemento (campo 'num1', ele atribui o valor vazio ao campo)
    })


}