# CTD Especialização Front-end 3 - Aula 4 (Base)

## Base para o exercício

1. Em `pages/pokemon/[id].js` teremos três funções, sendo ela duas async await. A função não assíncrona deverá retornar os dados (nome e imagem do pokémon).
2. A função `getStaticPaths` será utilizada para definir uma lista de caminhos (rotas) a serem gerados estaticamente, além disso iremos utilizar o `fallback: false` para caso seja acessado algum caminho não passado no parâmetro do `paths`.
3. Na função `getStaticProps` iremos ter um fetch na API do pokémon (`https://pokeapi.co/api/v2/pokemon/${params.id}`) para ter os dados (do parâmetro) necessários para renderizar a página.

Clique [aqui](https://github.com/PedagogiaDHBrasil/ctd-esp-front3-aula4-completo) para te acesso a Base para o exercício completo.

#### Digital House
