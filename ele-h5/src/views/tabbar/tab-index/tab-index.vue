<template>
  <Transition name="fade">
    <SearchView v-if="isSearchViewShow" @cancel="toggleSearchView" />
  </Transition>

  <div v-show="!isSearchViewShow">
    <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
    <OpLoadingView :loading="pending" type="skeleton" />

    <HelloWorld :msg="'fgg'" />
  </div>
</template>

<script setup lang="ts">
import TheTop from './components/TheTop/TheTop.vue';
import { useToggleHook } from '@/hooks/useToggleHook';
import { useAsyncHook } from '@/hooks/useAsyncHook';
import { fetchHomePageApi } from '@/api/homeApi';
import type { IHomeInfo } from '@/types/home';

const recomments = [
  { value: 1, label: '牛腩' },
  { value: 2, label: '色拉' },
];

// 数组解构
const [isSearchViewShow, toggleSearchView] = useToggleHook(false);

const { pending, data } = useAsyncHook(fetchHomePageApi, {} as IHomeInfo);
</script>

<style scoped>
@import './style.scss';
</style>
