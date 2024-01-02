import { ref, type UnwrapRef } from 'vue';
import type { IResponse } from '@/types';

export const useAsyncHook = <T>(asyncFunc: () => Promise<IResponse<T>>, initValue: T, immediate = true) => {
  const pending = ref(false);
  const data = ref(initValue);
  const error = ref(null);

  const execute = () => {
    pending.value = true;
    error.value = null;

    return asyncFunc()
      .then((res) => {
        // console.log(res.data);
        data.value = res.data as UnwrapRef<T>;
        pending.value = false;
      })
      .catch((err) => {
        error.value = err;
        pending.value = false;
      });
  };

  if (immediate) execute();

  return {
    pending,
    data,
    error,
    execute,
  };
};
