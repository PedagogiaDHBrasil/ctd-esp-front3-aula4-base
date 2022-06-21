export default function Pokemon() {
  return {};
}

export async function getStaticProps() {
  await fetch(`https://pokeapi.co/api/v2/pokemon/`).then(() => {});

  return {};
}

export async function getStaticPaths() {
  return {};
}
