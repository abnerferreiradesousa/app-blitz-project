# 🚀 Bem vindo a minha aplicação TaskList! 🚀

## 🥱 Introdução...

Esse projeto foi feito com o intuito de praticar habilidades requeridas em processos seletivos, no que tange a Desafios Técnicos. 
O projeto consiste na elaboração de um CRUD de lista de tarefas, que ajudedasse os profissionais da empresa Ebytir(fake) a organizarem
suas tarefas do cotidiano com foco em produtividade e eficiência.

## 📍 Como rodar o projeto?

Afim de poupar seu tempo, adianto que não conseguirar rodar esse projeto na sua máquina. O por quê? Digamos que a batalha entre docker *versus* 
este que vos fala foi perdida, mas a guerra ainda há de vir. Esse foi só um dos desafios que encarei ao longo do projeto, vocẽ pode ver outros
no tópico "*Defafios que infrentei*".

## Defafios que infrentei...  🗡️ 💥 

### ⚔️ Round One! **Fight!** 🥊

* 🔥 React - Tive dificuldade com as versões do React, algumas estavam quebrando, não conseguia conciliar meu código JavaScript com o código JSX(HTML).
Passei 30 minutos tentando entender porque as tarefas não estavam sendo renderizadas na tela, o problema? Um || ao invés de &&, para os íntimos
operador OR e AND, respectivamente.

* 🛡️ Como resolvi? Busquei fomas no StackOverflow como usar versões um pouco mais antigas do React, partindo do princípio de que elas são mais estáveis, foi o caso da 17.0.0. O problema do operador || ao invés do && quem detectou foi um colega, ao qual pedi um code review afim de que ele me restornasse posssíveis causas do problema.

### ⚔️ Round Two! **Fiight!** 🥊

* 💥 Context API e Hooks - Esse foi um cadinho desafiante, tive bastante problema. Entre eles uma variável token que não estava sendo populada quando deveria, código assíncrono quando se faz uma requisição para a API de tarefas, ou mesmo bugs, quando uma variável tasks é populada, mas seu conteúdo não é renderizado na tela.

* 🛡️ Como resolvi? Não resolvi. O último bug em específico, em que a variável é populada, mas seu valor não é renderizado, ainda não descobri o que pode ser. Estou tentando buscando conteúdos relacionados ao Ciclo de Componentes, coisas específicas do Context API e Hooks.

### ⚔️ Round Three! Final! **Fiiiiight!** 🥊

* 🔥 Docker - Sem dúvida esse foi o mais desafiante e do qual, como já sabe, não saí vitorioso. De início tentei dockerizar o backend, mas a única coisa que  obtive foi **SequelizeConnectionRefusedError** ao *rodar o docker-compose up*, fiquei decepcionado, porém mais entusiasmado em ver que o Docker é mais profundo do que configurar um simples Dockerfile ou docker-compose.

* 🛡️ Até o momento ainda tenhas teorias das causas do problema e estou em busca de respostas. Como eu disse a guerra ainda há de vir!

## Minhas considerações finais... ✍️

Ao contrário do que possa parecer estou feliz com o resultado, é engraçado pensar que em um projeto que eu achava tão simples eu pude me desafiar tanto e encontrar inúmeras experiências de reflexão e aprendizado. Esse projeto não vai findar aqui, só vai acabar quando eu o tiver conluído por inteiro. Até o momento, consigo visualizar muitos pontos a serem explorados. E gostaria de listá-los aqui:

* Prioridades na resolução do desafio técnico - queria ter focado mais no núcleo do que era pedido no desafio, penso que poderia ter mostrado mais fazendo menos, investi tempo em detalhes comprometendo a entrega mínima do projeto.

* Poderia ter feito um pouco de cada coisa ao construir a aplicação ao invés de deixar os testes para o final, por exemplo: uma rota, um teste, um esboço no Readme explicando o que a rota retorna.

* Docker - quero muito dockerizar esse projeto e depois explorar o que é possível fazer com o Docker, de fato me aprofundar na tecnologia.

* Aprender como testar aplicação Frontend que usa Context API. 

Também quero listar as aprendizados em hard skills adquiridos/reforçados:

* Configurar todo o projeto do zero foi sensacional.

* Sequelize(ao configurá-lo tive mini problemas que me ajudaram a entender melhor como o Sequelize funciona).

* Context API.

* React.

* JavaScript.

* NodeJs.

* Express.

* Conseguir trabalhar em cima de um padrão de branches, commits e Pull Requests para cada incremento da aplicação. 





