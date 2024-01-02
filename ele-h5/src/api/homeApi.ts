import http from './httpRequest';
import type { IHomeInfo } from '@/types/home';
import type { IResponse } from '@/types';

export const fetchHomePageApi = (): Promise<IResponse<IHomeInfo>> => {
  return http.get('home_page');
};
