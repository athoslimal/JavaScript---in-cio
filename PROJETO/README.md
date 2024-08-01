Arquivo informativo sobre o que se trata esse programa.

Jogo texto desenvolvido para colocar conhecimentos em prática. Esse jogo conta com interações e decisões que definirão o rumo do personagem.

Para conseguir jogar, devem ser feitos alguns passos, o primeiro deles é a configuração do ambiente para que tudo rode perfeitamente.

1.Configuração do Ambiente
Certifique-se de ter o NodeJS instalado em seu sistema. Você pode baixá-lo e instalá-lo a partir do site oficial do NodeJS. 
Acesse a pasta onde estão todos os arquivos do jogo e através do terminal acesse a pasta em questão e digite: 

npm install prompt-sync

Após a instalção, o jogo pode ser executado pelo comando, que executa o arquivo index (onde contém a estrutura do jogo):

node .\index.js

o arquivo index.js contém toda a estrutura do jogo;
o arquivo personagem.js contém os atributos e configuração comum a todos os personagens;
o arquivo heroi.js contém os atributos herdados do arquivo personagem.js e os específicos do heroi e a definição de algumas funções que serão utilizadas ao longo das fases;
o arquivo vilao.js contém os atributos herdados do arquivo personagem.js e os específicos do vilao e a definição de algumas funções que serão utilizadas ao longo das fases;
o arquivo fase1.js contém toda a história da primeira fase e as funções utilizadas dentro dela;
o arquivo fase2.js contém toda a história da segunda fase e as funções utilizadas dentro dela;
o arquivo fase3.js contém toda a história da terceira fase e as funções utilizadas dentro dela;
o arquivo fasefinal.js contém toda a história da última fase e as funções utilizadas dentro dela;