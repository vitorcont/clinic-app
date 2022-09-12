# Manual Técnico do Projeto

## Pré Requisitos

- Node na versão 16.0.0
- Yarn na versão 1.22.5
- Expo CLI 6.0.5

## Comandos utilizados

Os seguintes comandos são relacionados ao aplicativo mobile e devem ser executados em um terminal dentro da pasta root.

Para instalar as dependências (no root do projeto):<br>
`yarn`

Para abrir o terminal de execução e rodar o aplicativo basta utilizar o comando e selecionar a plataforma desejada ou então ler o QRCode com seu dispositivo.<br>
`yarn start`

Para gerar uma release basta utilizar.<br>
`expo build:[android|ios]`

## Gerar uma release / apk

Para gerar uma apk você deve primeiro instalar as dependências do projeto

```sh
yarn install
```

Após instaladas basta utilizar o comando (selecionando para que plataforma deseja gerar a release)

```sh
expo build:[android|ios]
```

## Utilidades, Ferramentas e Organização

Informações básicas sobre bibliotecas, versões e organização

### Organização e Arquitetura

Organização de algumas pastas e componentes essênciais do projeto:

**Telas**

As telas estão organizadas dentro da pasta `./src/pages` elas devem seguir a hierarquia de navegação, onde dentro do mesmo caminho deve haver um navegador e as suas telas.

Por Exemplo:

```bash
pages/
├─ auth/
│   ├─ authStack.tsx
│   ├─ login/
│   │   ├─ index.ts
│   │   ├─ login.tsx
│   │   └─ login.style.ts
│   └─ recovery/
│       ├─ index.ts
│       ├─ recovery.tsx
│       └─ recovery.style.ts
├─ content/
│   ├─ contentStack.tsx
│   ├─ home/
│   │   ├─ homeStack.tsx
│   │   ├─ profile/
│   │   │   ├─ index.ts
│   │   │   ├─ profile.tsx
│   │   │   └─ profile.style.ts
│   │   └─ test/
│   │       ├─ index.ts
│   │       ├─ test.tsx
│   │       └─ test.style.ts
│   └─ activity/
│       ├─ index.ts
│       ├─ activity.tsx
│       └─ activity.style.ts
...
```

**Componentes**

O Projeto utiliza a Metodologia de Organização Atômica, nela quebramos os componentes em várias camandas, diferenciando elas em complexidade e modularidade, a partir disso temos as seguintes divisões:

- elements

São os componentes mais simples e reutilizaveis da aplicação, pequenos elementos que podem ser utilizados em vários lugares como botões, grids, inputs e etc...

- modules

São os componentes que envolvem o uso de outros componentes pequenos (como elementos) e possuem uma estrutura / complexidade maior, por exemplo inputs com botões, caixas de texto, campos clicáveis e etc..

- templates

São os componentes mais complexos da aplicação, podem envolver vários módulos e elementos, por exemplo formulários, carroséis, headers e etc...

Focando nessa organização e métodologia conseguimos montar componentes escaláveis e extremamente reutilizaveis para uma aplicação.

Referência: https://atomicdesign.bradfrost.com/chapter-2/

**Serviços**

O Projeto Base já possui alguns serviços disponiveis como:

- Linking
- Mascaras
- Navegação
- Toaster
- Datas

Todos esses serviços estão disponíveis na pasta `./src/services`, alguns deles são essênciais como serviço de Navegação, esses serviços estão disponíveis para facilitar o uso de alguns métodos e funções comumente utilizados.

**Hooks**

O Projeto Base possui alguns Hooks que para serem utilizados como:

- useKeyboard (para detectar presença do teclado)
- usePagination (para paginação em listas)
- useReduxState (para acessar dados no redux)
- useScroll (para ações de Scroll)

Todos esses hooks estão disponíveis na pasta `./src/hooks`
