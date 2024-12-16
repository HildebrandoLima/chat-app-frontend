## CHAT COM WEBSOCKET

Telas implementadas a partir do outro desafio conforme este link [ms-chat](https://github.com/HildebrandoLima/ms-chat-app). No projeto de front-end, abordo uma arquitetura limpa e distribuida, dividada em camadas como: Servives, Repositories, Config e Utilitários.

No projeto abordo diversos temas com foco em demonstrar meu conhecimento com ReactJS.

Exploro o ecossistema da biblioteca do ReactJS, utilizando funcionalidades como axios e bootstrap.

### [Crie sua massa de testes para pessoa, CPF, nome e afins, clicando aqui!](https://www.4devs.com.br/)

### Aplicação Web desenvolvida com:<br />

- ReactJS<br />

### Funcionalidades (Atualmente desenvolvidas)
<ul>
    <li>CRUD de Mensagens</li>
    <li>Edição de usuário</li>
</ul>

## PASSOS:

<details>
<summary>Detalhes</summary>

### Requesitos necessários para executar o projeto:
<ul>
    <li>Instalar o Node versão 22.11.0</li>
    <li>Instalar o pacote npm</li>
    <li>Instalar o pusher</li>
    <li>Instalar o axios</li>
    <li>Instalar o bootstrap</li>
    <li>Instalar uma IDE de sua escolha (VSCode)</li>
</ul>

### Executar o projeto:
<ul>
    <li>Clone o projeto: `git clone https://github.com/HildebrandoLima/upd8_front_end.git`</li>
    <li>Adicione o arquivo env.js n apasta ./src/config</li>
    <li>Execute o comando: `npm install`</li>
    <li>Certifique-se que um diretório chamado `**/node_modules**` foi criado.</li>
    <li>Execute o comando: `npm install pusher-js`</li>
    <li>Execute o comando: `npm install axios`</li>
    <li>Execute o comando: `npm install bootstrap`</li>
    <li>Execute o comando: `npm start`</li>
</ul>

### Configure o Pusher:

[Acesse o link](https://pusher.com/tutorials/react-websockets/)

### Conectando com API:

> No seu env.js adicione da seguinte forma:<br />

> const env = {<br />
>     API_BASE_URL: 'http://localhost:8000/api/'<br />
> };<br />
> <br />
> export default env;<br />

### Para iniciar aplicação:
`npm start`
Agora acesse o endereço `http://localhost:3000` em seu navegador
</details>
