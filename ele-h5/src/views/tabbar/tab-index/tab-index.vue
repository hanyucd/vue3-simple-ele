<template>
  <Transition name="fade">
    <SearchView v-if="isSearchViewShow" @cancel="toggleSearchView" />
  </Transition>

  <div v-show="!isSearchViewShow">
    <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
    <HelloWorld :msg="'fgg'" />
  </div>
</template>

<script setup lang="ts">
import TheTop from './components/TheTop/TheTop.vue';
import { useToggleHook } from '@/hooks/useToggleHook';

// 数组解构
const [isSearchViewShow, toggleSearchView] = useToggleHook(false);

const recomments = [
  {
    value: 1,
    label: '牛腩',
  },
  {
    value: 2,
    label: '色拉',
  },
];
</script>

<style lang="scss" scoped></style>
