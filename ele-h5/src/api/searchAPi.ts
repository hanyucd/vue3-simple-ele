import http from './httpRequest';
import type { ISearchResult } from '@/types/home';
import type { IResponse } from '@/types';

type searchResultType = { list: ISearchResult[] };

export const fetchSearchApi = (key: string) => {
  return http.get<searchResultType, IResponse<searchResultType>>('home_search', {
    params: {
      _label_like: key,
    },
  });
};

// 或者：
export const fetchSearchApi2 = (key: string): Promise<IResponse<searchResultType>> => {
  return http.get('home_search', {
    params: {
      _label_like: key,
    },
  });
};

export const fetchSearchApi3 = (key: string) => {
  return http.get('home_search', {
    params: {
      _label_like: key,
    },
  });
};
