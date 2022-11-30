import { useEffect, useState } from 'react';
import { listHeroDetails } from '../functions/listHeroDetails';

const useHeroData = ({ id }) => {
  const [dataHero, setDataHero] = useState([]);
  useEffect(() => {
    listHeroDetails({ id })
      .then((res) => {
        setDataHero(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return dataHero;
};

export default useHeroData;
