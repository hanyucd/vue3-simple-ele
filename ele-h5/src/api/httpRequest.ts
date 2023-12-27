import axios from 'axios';
import type { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { showDialog } from 'vant';

const http: AxiosInstance = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.VITE_APP_BASE_API,
});

/**
 * 请求拦截器
 */
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    console.log(config);

    return config;
  },
  (error: AxiosError) => {
    console.log(error);
  },
);

// type axiosResponse = {
//   code: string;
//   data: any;
//   message: string;
// };
/**
 * 响应拦截器
 */
http.interceptors.response.use(
  (res: AxiosResponse) => {
    // console.log(res);
    const resData = res.data;
    if (resData.code !== 0) {
      showDialog({
        message: resData.msg,
      }).then(() => {
        // 关闭弹窗的逻辑
      });

      return Promise.reject(resData.msg);
    }

    return resData;
  },
  (error: AxiosError) => {
    console.log(error);
  },
);

export default http;
