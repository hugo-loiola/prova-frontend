## Prezada turma,

- Criar um projeto chamado prova

  ```bash
  npm i -g npm@9.6.6
  npx create-next-app@latest prova
  ```

- Instalar os pacotes:

  ```bash
  npm i axios
  npm i react-bootstrap bootstrap
  ```

- Utilizando a seguinte api, faça o que se segue:

  ```bash
  baseURL: https://api.artic.edu/api/v1
  Documentação: http://api.artic.edu/docs
  ```

<ol>
<li>
(3 pontos) - Criar uma página com uma listagem de obras de artes (endpoint: /artworks), conforme imagem1.

Criar os itens em uma tabela - Adicionar uma opção para detalhamento do item, representado nessa imagem pelo ícone da lupa (mas pode adicionar um botão, link ou outro ícone).

OBS: O json de retorno desse endpoint está no arquivo artworks.json

</li>

<li>
Ao clicar na opção de detalhe, apresentar os detalhes deste (endpoint: /artworks/{id}), conforme imagem2
(2,5 pontos).

Separar a tela em duas colunas, onde a primeira é para a foto e a segunda para os dados detalhados na imagem.

(1 ponto) - Usar em cards coloridos (conforme imagem) para separar as colunas

(1 ponto) - Caso o item não possua foto, o respectivo card não deverá ser exibido. (Ex: /artworks/264941)

(0,5 pontos) - Adicionar um botão para voltar à página de listagem.

OBS: O endereço da imagem é: "https://www.artic.edu/iiif/2/&quot; + arte.image_id + "/full/843,/0/default.jpg"
OBS2: O json de retorno desse endpoint está no arquivo detalhe.json

</li>

<li>
Criar uma página de "Tipos de Arte" que ao clicar liste os os gêneros (endpoint: /artwork-types), conforme imagem3.

(1,5 pontos) - Em cada tópico, adicionar o nome do tipo e, entre parênteses, a data de atualização de cada tipo.

(0,5 pontos) - Adicionar no menu os itens Obras e Tipos de Obra, cada um clicando para a sua página.

OBS: O json de retorno desse endpoint está no arquivo tipos.json

</li>

<li>
(0,5 PONTO EXTRA) - Abaixo da imagem, exibir uma opção para Abrir a imagem em uma nova aba, onde será exibida somente a imagem na tela, conforme imagem4.

</li>

<li>
(1 PONTO EXTRA) - Adicionar os ícones exibidos nas imagens (na listagem e nos botões da tela de detalhe). Sugestão: usar a biblioteca react-icons: npm i react-icons (pode usar qualquer ícone, não necessariamente os da imagem)
</li>

</ol>
    
ATENÇÃO: O link do git ou a pasta zipada SEM O NODE_MODULES

Boa prova.

Atenciosamente,
Orion Teles.
