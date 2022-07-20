<h1 align="center">Authenticator</h1>

<p align="center"><strong>Authenticator</strong> é um serviço web capaz de autenticar e validar as requisições do usuário via Token JWT.</p>

</br>

### Tecnologias e técnicas utilizadas: 

- [React](https://pt-br.reactjs.org/)
- [React Router DOM v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Phospor icons](https://phosphoricons.com/)
- [Redux](https://redux.js.org/), 
- [TailwindCSS](https://tailwindcss.com/), 
- [React-Toastify](https://npm.io/package/react-toastify),
- [Node.js](https://nodejs.org/en/), 
- [MongoDB](https://www.mongodb.com/), 
- [ExpressJS](https://expressjs.com/). </br>
O projeto teve foco em componentes do tipo Class.

</br>

### Features

- [x] Login com usuário e senha
- [x] Cadastro de usuário no BD
- [x] Autenticação via Token JWT
- [x] Validação do Token nas requisições
- [x] Expiração do Token
- [x] Refresh do Token

</br></br>

<h2 align="center">Building</h2>

### Pré-requisitos

Antes de começar, você precisará das seguintes ferramentas:
</br>
- [Node.js](https://nodejs.org/en/) Versão utilizada: 16.16.0. 
- [MongoDB](https://www.mongodb.com/try/download/community) Versão utilizada: 6.0.0
- Terminal de sua preferência


<h4>Opcional</h4>

- [MongoDB Compass](https://www.mongodb.com/pt-br/products/compass)(Interface gráfica do Mongo)


### Iniciando o Projeto

```bash
# Clone este repositório
$ git clone <https://github.com/Sidneycarlinijr/authenticator.git>

# Acesse a pasta do backend
$ cd backend

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start

### Iniciando o Front End

# Retorne para a pasta authenticator
$ cd -

# Acesse a pasta do frontend
$ cd frontend

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start
```
</br>

### Utilizando o MongoDBCompass:

Ao inicializar o Compass, a Connection String/ URI a se utilizar é: mongodb://localhost:27017 (padrão)

- Com o projeto Authenticator aberto, crie um registro de usuário. 
- Ao registrar um usuário, o Mongo deverá automaticamente criar uma nova collection, encontrada conforme imagem: 


![MongoDB Example](https://user-images.githubusercontent.com/56966244/179994233-300c7bf9-aeb5-4ec2-988c-f6a9c02443a0.png)

