# [blog.riojs.org](http://blog.riojs.org)
Este repositório tem o objetivo de concentrar todas as informações sobre o desenvolvimento, formato e organização do blog Rio.JS. Todas as discussões serão realizadas de forma aberta através de [issues](https://github.com/riojs-org/blog/issues). Qualquer contribuição será bem vinda :)

## Primeiros passos

1. Instale o [Git](http://git-scm.com/downloads) e [Ruby](http://www.ruby-lang.org/pt/downloads/), caso você ainda não tenha em sua maquina.

2. Após isso, abra o terminal e instale o jekyll com o seguinte comando:

  ```sh
  $ gem install jekyll
  ```

3. Agora clone o projeto

  ```sh
  $ git clone git@github.com:riojs-org/blog.git
  ```

4. Abra a pasta do projeto

  ```sh
  $ cd blog
  ```

5. E finalmente rode:

  ```sh
  $ jekyll
  ```

Agora você tem acesso ao blog em `http://0.0.0.0:4000/` :D

## Como contribuir

1. Crie uma branch para o seu post:

  ```sh
  $ git branch post/titulo-do-post
  $ git checkout post/titulo-do-post
  ```


2. Crie um arquivo na pasta `_posts` com a data e título do seu post respeitando a seguinte regra:

  ```sh
  ANO-MES-DIA-titulo-do-post.md
  ```

3. Escreva um **post irado** com markdown e lembre-se de linkar o seu usuário para a sua página do Github.

4. Faça o commit com o seu post.

        $ git add .
        $ git commit -am 'post: Título do post'

5. Faça o push do seu branch.

        $ git push --set-upstream origin post/titulo-do-post

6. Crie um pull request através da interface web do GitHub.

### Markdown

A sintaxe que usamos para escrever os posts é a markdown. Se precisar de ajuda, tem esse guia aqui para te dar uma força [cheatsheet](http://markdown.chibi.io/)


## Mantenedores
- [@pedromarins](https://github.com/pedromarins)
- [@raphamorim](https://github.com/raphamorim)
- [@afonsopacifer](https://github.com/afonsopacifer)