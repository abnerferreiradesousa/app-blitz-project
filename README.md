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

* Docker - sem dúvida esse foi o mais desafiante e do qual, como já sabe, não saí vitorioso. De início tentei dockerizar o backend, mas o que eu obtive foi
