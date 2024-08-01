//Criando a classe 'Personagem', que vai conter os atributos em comum dos personagens

class Personagem {

    constructor(vida){ //definindo os atributos do objeto
        this.vida = vida; //definindo o valor que esse atributo vai receber para o personagem específico (no caso o valor é o que tiver na variável vida)
    }

}

module.exports = Personagem; //código que torna o objeto exportável