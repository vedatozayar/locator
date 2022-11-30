import axios from 'axios';

export const listHeroDetails = async ({ id }) =>
  await axios.get(`https://akabab.github.io/starwars-api/api/id/${id}.json`);
