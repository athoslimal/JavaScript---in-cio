const Personagem = require("./personagem"); //importando do objeto personagem os atributos que são comuns a todos os personagens

//criando a classe de heroi que será utilizada para criação do heroi durante o jogo
class Heroi extends Personagem{
    moedas = 0; //por não ser obrigatório para o início do jogo, ou seja, não é um atributo inicial do heroi, definimos aqui antes do constructor para inicar com valor 0
    
    //os itens do constructor são obrigatórios, ou seja, para que o herói exista, tem de haver todos os atributos listados abaixo
    constructor(vida, nome, fome, forca){ //informando para o constructor todos os atributos que o heroi terá
        super(vida) //importando do objeto personagem a vida, que é comum aos personagens
        this.nome = nome; //atribuindo os valores aos atributos do heroi (this.nome=nome quer dizer que o nome do heroi recebe o 'valor' que for atribuído a variável 'nome')
        this.fome = fome;//this.fome quer dizer que a 'fome' local recebe o valor da 'fome' que for passado para essa variável (foram definidos no início do jogo e são acessados e modificados ao longo dele)
        this.forca = forca //mesma coisa da 'fome'
    }

    status(){ //definindo a função status que mostra ao usuário uma espécie de tabela com os atributos e valores de cada um deles
        console.log();
        console.log(`Nome: ${this.nome}`); //acessa a variável this.nome que contem o nome definido
        console.log(`Vida: ${this.vida}%`); //acessa a variável this.vida que contém a quantidade de vida, o this serve justamente porque ao longo do jogo, esse valor vai se alterando com base nas escolhas, portanto, esse valor vai sendo atualizado com o que for recebido ou perdido.
        console.log(`Fome: ${this.fome}%`); //mesma coisa para todos os outros atributos
        console.log(`Força: ${this.forca}%`);
        console.log(`Moedas: $ ${this.moedas}`);
        console.log();
    }

    alimentar(fome, vida){ //função alimentar que soma ao 'this.fome' a quantidade de 'fome' atual com a quantidade de 'fome' ganhada com base nas decisões do jogador
        this.fome += fome; //se não houvesse o 'this' não teríamos como atribuir valores mutáveis a essa variável 'fome' apenas para o heroi específico criado
        this.vida += vida; //faz o mesmo com a 'vida', soma o valor ganhado com o valor atual

    }

    treinar(treino){ //função que soma a variável 'forca' o valor ganho com o valor atual da variável
        this.forca += treino;
    }

    deposito(moedas){ //função que contabiliza o número de moedas ganhas
        this.moedas += moedas;
    }

    saque(moedas){ //função que contabiliza o número de moedas gastas
        this.moedas -= moedas; //também é utilizado o 'this' mesmo não sendo um atributo do constructor porque é uma variável para o heroi criado específico e precisa ser acessada com base num valor que já existe ('moedas')
    }

    restaurar(){ //função que atribui os valores determinados abaixo para cada um dos atributos listados (ex.: se estava em 50, passa a ser 100)
        this.vida = 100;
        this.fome = 100;
        this.forca = 100;
    }

    restaurarvida(vida){ //função utilizada para restaurar apenas o atributo 'vida' (soma o valor ganhado ao atual da 'vida')
        this.vida += vida;
    }

    atacar(){
        return Math.floor(Math.random() * (this.vida + this.forca));
        //criando uma função que retorna um número randômico multiplicado pela soma da vida com a força, arredondado no final, essa função define a força do ataque
        //é apenas um valor de referência que será utilizado no jogo
    }


    defender(golpe){
        this.vida -= golpe; //remove da 'vida' o valor do 'golpe', que é o valor de referência, por isso está dentro dos parênteses (é uma função que retira um valor dos atributos especificados e será utilizado ao longo do jogo)
        this.forca -= golpe; //faz o mesmo com a força
    }

}

module.exports = Heroi; //código de exportação do arquivo (Obejto 'Heroi')