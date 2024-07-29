//Criando a classe veículo, que vai ser usada nos arquivos de cada veículo específico, pois tem elementos em comum para todos.

class Veiculo{
    constructor(marca, modelo, anofabricacao, tipo, combustivel, ocupantes){
        this.marca = marca; //this.marca representa algo interno (o contexto dentro do construtor), existe apenas dentro da classe
        this.modelo = modelo;// o this refencia o atributo que foi criado para o carro que for adicionado
        this.anofabricacao = anofabricacao;
        this.tipo = tipo;
        this.combustivel = combustivel;
        this.ocupantes = ocupantes;
    }

    apresentacao(){
        console.log(`${this.marca}, modelo: ${this.modelo}, ano: ${this.anofabricacao}.`);
    }

    //criando formas de validação dos atributos dos objetos
    validacao(){
        if (!this.marca){
            /*console.error("Não há marca preenchida.");*/
            //ao invés do console.log (que é uma mensagem de aviso, pode ser utilizado o 'throw new error', que quebra o programa ou o console.error que mostra uma mensagem do tipo alerta no prompt)
            throw new Error("Não há marca preenchida") //se a marca estiver vazia, trás esse erro e quebra o programa
        } else if (typeof(this.marca) != "string"){ //se passar pelo primeiro 'if', parte para verificar se é um sting
            throw new Error("Marca não é string") //se não for string, mostra o erro e quebra o programa.
        }
        if (!this.modelo){
            console.log("Não há modelo preenchido.");
        }
        if (!this.anofabricacao){
            console.log("Não há ano de fabricação preenchido.");
        }
    }

    padronizacao(){ //definindo função de padronização para os atributos
        this.marca = this.marca.toString().toUpperCase(); //pega a informação da marca, transforma tudo em string e coloca todos os caracteres em maiúsculo
        this.modelo = this.modelo.toString().toUpperCase();

    }

}

module.exports = Veiculo;