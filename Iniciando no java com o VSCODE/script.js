/*No código abaixo, está sendo definido o script presente no arquivo html
criando os botões com a função window.onload=function(){} de acordo com o que deseja ter no conteúdo do site
nesse caso foram criados 3 botões e cada um deles mostra uma mensagem se forem clicados */

window.onload=function() {
    document.getElementById("azul").addEventListener("click",function() { /*aqui, quando houver clice no botão azul, ele vai realizar a função definida abaixo:*/
        alert("A cor do título será alterada para azul"); //aqui ele mostra um recado para o usuário
        document.getElementById("titulo").style.color = "blue"; //aqui é uma função que troca a cor do título para azul, utilizando o id do título no arquivo html
   //a função style acessa qualquer item do arquivo css, aqui eu especifiquei que quero mudar a cor do item titulo para azul.
    });
    document.getElementById("verde").addEventListener("mouseover",function() {
        document.getElementById("titulo").style.color = "green"; //ao passar o mouse no botão 'verde' ele muda a cor do título para verde
        document.getElementById("verde").style.backgroundColor = "green"; //ao passar o mouse no botão 'verde' a cor do botão fica verde
        //mudanças de cor através do javascript, como essa feita acima, elas sobrescrevem, se não for construída função para que volte ao normal, ele não volta.
    });

    document.getElementById("amarelo").addEventListener("click",function() {
        alert("A cor do título será alterada para amarelo");
        document.getElementById("titulo").style.color = "yellow";
    });

    document.getElementById("cinza").addEventListener("mouseout",function() {
        document.getElementById("titulo").style.color = "grey"; //ao tirar o mouse do botão 'cinza' ele muda a cor do título para cinza

    });


    document.getElementById("vermelho").addEventListener("click",function() {
        alert("A cor do título será alterada para vermelho");
        document.getElementById("titulo").style.color = "red"
    });

    document.getElementById("roxo").addEventListener("mouseup",function() {
        document.getElementById("titulo").style.color = "purple"; //ao clicar no botão 'roxo' ele muda a cor do título para roxo.
    });
}