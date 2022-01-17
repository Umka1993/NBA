import axios from 'axios';

const baseRequestAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
    accept: 'application/json',
  },
});

// export const axiosHeadersUpdater = (): void => {
//   const token = localStorage.getItem('token');
//   baseRequestAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// };

baseRequestAxios.interceptors.request.use((request) => {
  const token = localStorage.getItem('SavedToken') ? localStorage.getItem('SavedToken') : null;
  if (request.headers && token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default baseRequestAxios;
