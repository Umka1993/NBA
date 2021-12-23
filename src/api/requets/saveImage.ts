import { AxiosResponse } from 'axios';
import { commandImg, saveImgResponse } from '../../types';
import baseRequestAxios from '../baseRequest';

export const savePicture = {
  save({ photoInput }: commandImg): Promise<AxiosResponse<saveImgResponse>> {
    const file = photoInput;
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);

    return baseRequestAxios.post<saveImgResponse>('/api/Image/SaveImage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
