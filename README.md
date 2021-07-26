# Projeto Final - Reprograma

## API Qual Farmácia

Desenvolvimento por: Magnólia Medeiros

## 🤩 A Motivação

Com o novo cenário do avanço do Covid-19 no Brasil, onde a maioria das cidades brasileiras restringem o funcionamento do comércio para conter aglomerações e, consequentemente, diminuir a proliferação do vírus. Nesse contextoa a rotina da população foi alterada por várias mudanças, uma delas foi a forma de consumir produtos e serviços.

Sabemos e vivenciamos a oferta cada vez maior de produtos e serviços através de canais digitais praticamente em todos os segmentos de mercado. E pensando nisso, a finalidade deste projeto é construir o *backend* de uma futura aplicação que pretende automatizar, simplificar e facilitar o nível de esforço requerido por usuários de farmácias e/ou drogarias do munícipio de **Currais Novos-RN** na busca por informações básicas, tais como: existe farmácia no meu bairro? qual o endereço e/ou telefone? a farmácia disponibiliza serviço de entrega em domicílio?, a farmácia de plantão? entre outras informações.

Atualmente para ter acesso as informações citadas acima, temos as seguintes opções disponíveis:

- Pesquisa no Google
- Pesquisa em Redes Sociais
- Blog local que disponibiliza um *print* de uma planilha que contém a relação de todas as farmácias que estão de plantão no mês
- Canal de TV a Cabo local, que vincula diariamente em sua programação as farmácias que estão de plantão no dia
- Rádios locais

## 📚 Sobre o Projeto

A *API Qual Farmácia* foi pensada para ajudar a população do município de **Currais Novos-RN** a encontrar informações sobre as farmácias e drogarias locais de forma centralizada e rápida, tornando o processo natural e acessível.

## 🚀 Tecnologias Utilizadas

| Ferramenta      | Descrição                                                    |
| --------------- | ------------------------------------------------------------ |
| javascript      | Linguagem de programação utilizada                           |
| npm             | Gerenciador de pacotes                                       |
| node.js         | Ambiente de execução javascript *server-side*                |
| express         | Framework para node.js                                       |
| dotenv          | Dependência que protege os dados sensíveis do projeto        |
| nodemon         | Dependência que observa as atualizações realizadas e executa o servidor automaticamente |
| mongoose        | Dependência que interage com o MongoDB para a conexão da database, criação do model e collections |
| MongoDB         | Banco de dados não relacional orientado a objetos            |
| MongoDB Compass | Interface gráfica para verificar se os dados foram persistidos |
| Insomnia        | Interface gráfica para realizar os testes de API's REST      |

## ⚙️ Arquitetura MVC

```json
📁 projeto-final-qualFarmacia
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── 📁 src
    ├── app.js
    ├── 📁 controllers
    │   ├── enderecoControllers.js
    │   └── farmaciaControllers.js
    ├── 📁 data
    │   └── dbConfig.js
    ├── 📁 models
    │   ├── enderecoSchema.js
    │   └── farmaciaSchema.js
    └── 📁 routes
        ├── enderecoRoutes.js
        ├── farmaciaRoutes.js
        └── index.js
```

## ⏱ Como Executar

#### Primeiro, execute o servidor de desenvolvimento

```bash
# Clonar o repositório:
$ git clone https://github.com/magnoliamedeiros/On11-reprograma-qualFarmacia.git

# Entrar na pasta do projeto:
$ cd On11-reprograma-qualFarmacia

# Instalar as dependências necessárias:
$ npm i

# Verificar o arquivo .env.example:
$ vim .env.example

# Iniciar o servidor em modo desenvolvimento:
$ npm run dev
```
#### Depois, para ver o resultado localmente abra o endereço http://localhost:3030 no seu navegador

## 🌐 Link do Projeto em Produção 

#### Os usuários devem preceder todas as chamadas de recursos com este URL base:

[`https://qualfarmacia-backend.herokuapp.com/`](https://qualfarmacia-backend.herokuapp.com/)

## Rotas

### Farmácias

| Método HTTP | endpoint                         | Descrição                                               |
| ----------- | -------------------------------- | ------------------------------------------------------- |
| GET         | /farmacias                       | Retorna toda as farmácias cadastradas                   |
| GET         | /farmacias/:id                   | Retorna uma farmácia específica por id                  |
| GET         | /farmacias/bairro/nome-do-bairro | Retorna as farmácias que existem no bairro especificado |
| POST        | /farmacias/cadastrar             | Cadastra uma nova farmácia                              |
| PATCH       | /farmacias/atualizar/:id         | Atualiza uma farmácia especificada pelo id              |
| DELETE      | /farmacias/deletar/:id           | Deleta uma farmácia especificada pelo id                |

## Endereços

| Método HTTP | endpoint                 | Descrição                                                    |
| ----------- | ------------------------ | ------------------------------------------------------------ |
| GET         | /endereços               | Retorna todos os endereços cadastrados                       |
| GET         | /endereços/:id           | Retorna a ou as farmácias existentes no endereço informado pelo id |
| POST        | /endereços/cadastrar     | Cadastra um novo endereço                                    |
| PATCH       | /endereços/atualizar/:id | Atualiza um endereço especificado pelo id                    |
| DELETE      | /endereços/deletar/:id   | Deleta um endereço especificado pelo id                      |

## Bando de dados MongoDB

### Dados da Collection Farmácia

- id: autogerado e obrigatório
- nome: texto e obrigatório
- Telefone de contato: texto e obrigatório
- Whatsapp: texto
- Endereco: faz referência a collection 'endereco'
- Número: texto
- Criado em: data e obrigatório

#### JSON retornado:

```json
  "success": "Farmácias listadas com sucesso!",
  "farmacias": [
    {
      "_id": "60e9dee7138ce87835f8c135",
      "nome": "frei damião ii",
      "telefoneDeContato": "3431-1356",
      "endereco": {
        "_id": "60e9de87138ce87835f8c131",
        "logradouro": "laurentino bezerra",
        "tipoDeLogradouro": "rua",
        "bairro": "centro",
        "criadoEm": "2021-07-10T17:53:11.575Z",
        "__v": 0
      },
      "numero": "105",
      "criadoEm": "2021-07-10T17:54:47.225Z",
      "__v": 0
    }
```

### Dados da Collection Endereço

- id: autogerado e obrigatório
- Logradouro: texto e obrigatório
- Tipo de Logradouro: texto e obrigatório
- Bairro: texto e obrigatório
- Endereco: faz referência a collection 'endereco'
- Criado em: data e obrigatório

#### JSON retornado:

```json
{
  "success": "Endereço cadastrado com sucesso!",
  "novoEndereco": {
    "_id": "60e9e219c1e9be7a22aee37b",
    "logradouro": "13 de maio",
    "tipoDeLogradouro": "avenida",
    "bairro": "paizinho maria",
    "criadoEm": "2021-07-10T18:08:25.420Z",
    "__v": 0
  }
}
```

## Implementações futuras

- Filtrar farmácias que estão de plantão
- Filtrar farmácias com serviço de entrega
- Exibir horário de funcionamento
- Autenticação de rotas
- Desenvolvimento de interface web

