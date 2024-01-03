<template>
  <div class="home-page">
    <Transition name="fade">
      <SearchView v-if="isSearchViewShow" @cancel="toggleSearchView" />
    </Transition>

    <div v-show="!isSearchViewShow">
      <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
      <OpLoadingView :loading="pending" type="skeleton">
        <div class="home-page__banner">
          <img v-for="v in data.banner" :key="v.imgUrl" :src="v.imgUrl" />
        </div>
        <TheTransformer :data="data.transformer" />
        <ScrollBar :data="data.scrollBarInfoList" :height="40" />
      </OpLoadingView>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTop from './components/TheTop/TheTop.vue';
import TheTransformer from './components/TheTransformer/TheTransformer.vue';
import ScrollBar from './components/ScrollBar/ScrollBar.vue';

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

<style lange="scss">
@import './style.scss';
</style>
