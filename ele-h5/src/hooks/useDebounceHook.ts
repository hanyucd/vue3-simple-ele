import { ref, watch, onUnmounted } from 'vue';
import type { Ref, UnwrapRef } from 'vue';

export const useDebounceHook = <T>(value: Ref<T>, delay: number) => {
  const debounceValue = ref(value.value);
  let timer: number | null = null;

  const unwatch = watch(value, (newValue) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      debounceValue.value = newValue as UnwrapRef<T>;
    }, delay);
  });

  onUnmounted(() => {
    unwatch();
  });

  return debounceValue;
};
