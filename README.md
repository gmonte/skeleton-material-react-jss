## Conheça a meta

> Esse projeto é um monorepositório com o intuito de centralizar o desenvolvimento de pacotes Javascript.


### Requisitos de ambiente

- *Node LTS* - recomendamos instalação via **[nvm]**
- *NPM LTS*  - recomendamos instalação via **[nvm]**
- *[Yarn]* `^1.17.*` **Obrigatório**

# Atenção
### Esse monorepositório está configurado para trabalhar com `yarn workspaces`.
### Utilze todos os comandos abaixo somente com `yarn`.
#### Nós *não* garantimos total compatibilidade com npm!

___

## Instalação

- Clone esse repositório na sua máquina
- Execute na raíz do projeto:
  ```
  $ yarn && yarn lerna bootstrap
  ```

## Dependências de projeto e de desenvolvimento

Para manipular as dependências em um pacote específico, você deve navegar pelo terminal até o diretório desse pacote, e então executar:

- Para adicionar/atualizar uma dependência externa:
  ```
  $ yarn add <package_name>
  ```
- Para adicionar uma dependência interna (comando deve ser executado na raíz do mono-repositório):
  ```
  $ yarn lerna add <package_name> --scope=<package_dest>
  ```
- Para adicionar/atualizar uma dependência de desenvolvimento:
  ```
  $ yarn add -D <package_name>
  ```
- Para remover qualquer dependência:
  ```
  $ yarn remove <package_name>
  ```

## Principais comandos do monorepositório

- ***Registrar*** pacote no workspace; ***Instalar*** e ***Linkar*** todas as dependências do workspace:
  ```
  $ yarn lerna bootstrap
  ```
- ***Visualizar*** pacotes do workspace:
  ```
  $ yarn lerna la
  ```
- ***Limpar*** node_modules de todos os pacotes do workspace:
  ```
  $ yarn lerna clean
  ```
- ***Tag*** versões dos pacotes alterados:
  ```
  $ yarn lerna version
  ```
- ***Publicar*** e ***Tag*** versões dos pacotes alterados:
  ```
  $ yarn lerna publish
  ```
- Ajuda:
  ```
  $ yarn lerna --help
  ```

[//]: #
[nvm]: https://github.com/nvm-sh/nvm
[yarn]: https://yarnpkg.com/docs/install
