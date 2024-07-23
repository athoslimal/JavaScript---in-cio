window.onload = function(){

    const imagens = document.getElementsByClassName("produtoimg") //criando uma constante de lista com as imagens dentro dessa classificação
    const total = document.getElementById("total");
    const saibamais = document.getElementsByClassName("saibamais");

    for(let i = 0; i<imagens.length; i++){ //laço de repetição que começa em zero e vai rodar até a quantidade de imagens que tiver, todas as vezes que rodar ele executa
        imagens[i].addEventListener("click", function(){ //para cada imagem que tiver, adicione um clique nela
            document.getElementById("imgAmpliada").src = imagens[i].src; //ao clicar na imagem, ele vai passar o caminho "src" da imagem clicada para a função me retornar aquela imagem apliada
            total.style.display = "block"; //chamando a constante que foi criada anteriormente e mudando o status do display através da função: .style.display = 'block' para bloquear a tela
       
        })
    }
    total.addEventListener("click", function(){ //adicionando uma função para após a ampliação da imagem, ao clicar ele trocar a função 'block' no display para 'none'
        total.style.display = "none"; //desativando a sobreposição que foi criada
    })

    for(let i = 0; i<saibamais.length; i++){
        saibamais[i].addEventListener('mouseover', function(){
            saibamais[i].style.fontSize = '120%' //mudando a fonte para um tamanho maior quando o mouse passar por cima do botão 'saiba mais'.
        })

        saibamais[i].addEventListener('mouseout', function(){
            saibamais[i].style.fontSize = 'initial' //retornando o tamanho da fonte do 'saiba mais' para o tamanho original quando o mouse sair de cima do botão.

        })
    }
}