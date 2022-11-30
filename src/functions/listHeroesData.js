import axios from 'axios';

export const listHeroesData = async () =>
  await axios.get('https://grundium-frontend.github.io/data/coordinates.json');
