import { ref } from 'vue';
import type { Ref } from 'vue';

/**
 * 用于在true和false之间进行切换
 */
export const useToggleHook = (initState: boolean = false): [Ref<boolean>, () => void] => {
  const state = ref<boolean>(initState);

  const toogleFunc = (): void => {
    state.value = !state.value;
  };

  return [state, toogleFunc];
};
