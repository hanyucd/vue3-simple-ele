import http from './httpRequest';
import type { ISearchResult } from '@/types/home';
import type { IResponse } from '@/types';

type resultType = { list: ISearchResult[] };

export const fetchSearchApi = (key: string) => {
  return http.get<resultType, IResponse<resultType>>('home_search', {
    params: {
      _label_like: key,
    },
  });
};
