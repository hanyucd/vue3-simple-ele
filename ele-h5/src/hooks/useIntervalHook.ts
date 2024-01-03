import { onUnmounted } from 'vue';

export function useIntervalHook(fn: () => void, delay: number) {
  const timer = setInterval(() => {
    fn();
  }, delay);

  const clear = () => {
    clearInterval(timer);
  };

  onUnmounted(clear);

  return clear;
}
