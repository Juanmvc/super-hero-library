import CustomError from '../../../domain/entities/CustomError';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import crypto from 'crypto';

const api: AxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: 'https://gateway.marvel.com/v1/public/',
  });
  
  api.interceptors.response.use(
    (res) => res,
    async (error: AxiosError) => {
      const { message } = error;
      const { status = 500 } = error.response || {};
      const customError = new CustomError(message);


      // it is possible to add a dictionary of errors if needed in a bigger application
      if (status === 404) {
        customError.setErrorMessage('API_404');
      }
  
      await customError.logError();
      customError.generateError();
    }
  );

export class MarvelBaseRepository {
  async get<T, R = AxiosResponse<T>>(
    endPoint: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await api.get<T, R>(endPoint, config);
  }

  async post<T, B, R = AxiosResponse<T>>(
    endPoint: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await api.post<T, R>(endPoint, data, config);
  }
}

export function md5Hash(str: string): string {
  return crypto.createHash('md5').update(str).digest('hex');
}
