import { useEffect, useState } from 'react';
import { listHeroesData } from '../functions/listHeroesData';

const useHeroesData = () => {
  const [dataHero, setDataHero] = useState([]);
  useEffect(() => {
    listHeroesData()
      .then((res) => {
        setDataHero(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return dataHero;
};

export default useHeroesData;
