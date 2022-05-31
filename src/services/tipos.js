export const obterTipos = async () => {
  try {
    const resposta = await fetch("https://pokeapi.co/api/v2/type/");
    const json = await resposta.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};