import axios from 'axios';
import { resolve } from './resolve';

export const checkLuhn = async (num: number) => {
  const query = { params: { number: num } };

  return await resolve(
    axios
      .get(`${process.env.REACT_APP_API}/luhn`, query)
      .then((res) => res.data)
  );
};
