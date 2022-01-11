import { AxiosResponse } from 'axios';
import baseRequestAxios from '../baseRequest';

export const savePicture = {
  save(formData: File | FormData): Promise<AxiosResponse<string>> {
    return baseRequestAxios.post<string>('/api/Image/SaveImage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
