import axios from 'axios';
// prettier-ignore
const baseRequestAxios = axios.create({
  baseURL: 'http://dev.trainee.dex-it.ru',
  headers: {
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
    'accept': 'application/json'
  }
})

// export const axiosHeadersUpdater = (): void => {
//   const token = localStorage.getItem('token');
//   baseRequestAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   debugger;
// };

baseRequestAxios.interceptors.request.use((request) => {
  const token = localStorage.getItem('SavedToken') ? localStorage.getItem('SavedToken') : null;
  if (request.headers && token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default baseRequestAxios;
