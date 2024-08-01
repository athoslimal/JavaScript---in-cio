const Personagem = require("./personagem"); //importando os atributos do arquivo personagem (objeto Personagem)

class Vilao extends Personagem{ //criando a classe do vilão

    constructor(vida, forcaAtaque){ //criando o constructor com os atributos em comum dos personagens e com os específicos dele
        super(vida); //trazendo o valor atributo em comum
        this.forcaAtaque = forcaAtaque; //definindo o valor que o atributo do vilão recebe com o 'this.forcaAtaque' e valor 'forcaAtaque'
    }

    ataqueEsp(){ //criando função que retorna o valor da variável this.forcaAtaque, que é específica do vilão (é um valor de referência que será utilizado ao longo do jogo)
        return this.forcaAtaque;
    }

    atacar(){
        return Math.floor(Math.random() * this.vida);
        //criando uma função que retorna um número randomico multiplicado pela vida, arredondado no final, essa função define a força do ataque e é um valor de referência para o jogo.
    }


    defender(golpe){ //função de defesa, funciona igual a do heroi.
        this.vida -= golpe; //remove da vida o valor que foi gerado acima, já que sofreu um golpe
    }
}

module.exports = Vilao;