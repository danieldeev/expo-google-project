# Expo Google Template
> Projeto Google UI para aplicações Expo (React Native) simples e escaláveis. 

## Estrutura de pastas
A estrutura do projeto foi elaborada de acordo com a arquitetura dos meus projetos pessoais e profissionais. Esse modelo estrutural me proporcionou um desenvolvimento mais focado e produtivo. 

Veja como estruturei o projeto dentro da pasta __src/__:

| __Pasta__        | __Descrição__                                    |
|------------------|--------------------------------------------------|
| component        | Componentes criados reutilizáveis                |
| lib              | Funções e Hooks                                  |
| page             | Páginas do projeto                               |
| router           | Configurações do roteador e subroteador          |
| service          | Redux, chamadas API e outros serviços            |
| theme            | Temas e configurações UI/UX                      |

Note que dentro de cada pasta existe um __index.js__, ele é responsável por exportar todos os arquivos/components da pasta local evitando aglomerações de imports para que o código seja mais limpo visualmente.

## Instalação
Antes de iniciar um projeto, veja se seu computador atende aos requisitos mínimos:

* __NodeJS__ (Versão 10 ou superior)
* __Expo CLI__ (Versão 4 ou superior)
* __Yarn__  (Versão 1 ou superior)

## Iniciando projeto
Você poderá usar o modelo de projeto usando o comando à seguir.

Para projetos usando __Expo__ use o comando:
```bash
    git clone https://github.com/danieldeev/expo-google-project
```

## Licença
Licença MIT