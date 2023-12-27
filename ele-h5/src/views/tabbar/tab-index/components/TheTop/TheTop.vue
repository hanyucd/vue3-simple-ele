<template>
  <div class="home-top">
    <div class="top">
      <img class="location-icon" src="@/assets/imgs/index_page/location.png" />
      <div class="location">杭州市滨江区长江小区520号</div>
      <img class="shopcart-icon" src="@/assets/imgs/index_page/shopcart.png" />
      <img class="comments-icon" src="@/assets/imgs/index_page/comments.png" />
    </div>

    <VanSearch shape="round" background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))" placeholder="布鲁斯披萨">
      <template #right-icon>
        <div>搜索</div>
      </template>
    </VanSearch>

    <div class="search-recomend">
      <div v-for="v in recomments" :key="v.value" class="tag">{{ v.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISearchRecomment } from '@/types/home';

interface IProps {
  recomments: ISearchRecomment[];
}

// let str: string = 988;

defineProps<IProps>();
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
