# On11-reprograma-qualFarmacia

## A Motivação

Com o novo cenário do avanço do Covid-19 no Brasil, onde a maioria das cidades brasileiras restringem o funcionamento do comércio para conter aglomerações e, consequentemente, diminuir a proliferação do vírus, a rotina da população foi alterada por várias mudanças nesse contexto, uma delas é a forma de consumir produtos e serviços.

Sabemos e vivenciamos a oferta cada vez maior de produtos e serviços através de canais digitais praticamente em todos os segmentos de mercado. E pensando nisso, a finalidade deste projeto é construir o *backend* de uma futura aplicação que pretende automatizar, simplificar e facilitar o nível de esforço requerido por usuários de farmácias e/ou drogarias na busca por informações básicas, tais como: existe farmácia no meu bairro? qual o endereço e/ou telefone? a farmácia disponibiliza serviço de entrega em domicílio?, a farmácia de plantão? entre outras informações.

Atualmente para ter acesso a essas informações citadas acima, temos as seguintes opções disponíveis:

- Pesquisa no Google
- Pesquisa em Redes Sociais
- Blog local que disponibiliza um print de uma planilha que contém a relação de todas as farmácias que estão de plantão no mês
- Canal de TV a Cabo local, que vincula diariamente em sua programação as farmácias que estão de plantão no dia
- Rádios locais

## Sobre o projeto

Qual Farmácia é uma api para gerenciamento de informações sobre as farmácias e drogarias do município de Currais Novos-RN, com o objetivo de disponibilizar o acesso rápido as informações a estes estabelecimentos.

| Ferramenta      | Descrição                                                    |
| --------------- | ------------------------------------------------------------ |
| javascript      | Linguagem de programação utilizada                           |
| npm             | Gerenciador de pacotes                                       |
| node.js         | Ambiente de execução Javascript *server-side*                |
| express         | Framework para Node.js                                       |
| dotenv          | Dependência que protege os dados sensíveis do projeto        |
| nodemon         | Dependência que observa as atualizações realizadas e executa o servidor automaticamente |
| mongoose        | Dependência que interage com o MongoDB para a conexão da database, criação do model e collections |
| MongoDB         | Banco de dados não relacional orientado a objetos            |
| MongoDB Compass | Interface gráfica para verificar se os dados foram persistidos |
| Insomnia        | Interface gráfica para realizar os testes de API's REST      |

## Arquitetura MVC

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

