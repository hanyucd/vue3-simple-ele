import http from './httpRequest';

export const fetchTest = () => {
  return http.get('test');
};
