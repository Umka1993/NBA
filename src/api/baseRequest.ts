import axios from 'axios';

export const baseRequestAxios = axios.create({
  baseURL: 'http://dev.trainee.dex-it.ru',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});
