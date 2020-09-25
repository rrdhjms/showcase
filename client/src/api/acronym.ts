import axios from 'axios';
import { resolve } from './resolve';

export const generateAcronym = async (word: string) => {
  const query = { params: { string: word } };

  return await resolve(
    axios
      .get(`${process.env.REACT_APP_API}/acronym`, query)
      .then((res) => res.data)
  );
};
