import axios from 'axios';
// prettier-ignore
const baseRequestAxios = axios.create({
  baseURL: 'http://dev.trainee.dex-it.ru',
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  }
})

// export const axiosHeadersUpdater = (): void => {
//   const token = localStorage.getItem('token');
//   baseRequestAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   debugger;
// };

baseRequestAxios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
  debugger;
  if (request.headers && token) {
    request.headers.Authorization = '7127f45959b14c3b07f0a9ff558d11c63055facbffd7694c5a';
  }
  return request;
});

export default baseRequestAxios;
