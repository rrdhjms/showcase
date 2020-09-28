import axios from 'axios';
import { resolve } from './resolve';

export const askBob = async (message: string) => {
  const query = { params: { string: message } };

  return await resolve(
    axios.get(`${process.env.REACT_APP_API}/bob`, query).then((res) => res.data)
  );
};
