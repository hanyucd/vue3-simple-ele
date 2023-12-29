<template>
  <div class="search-view">
    <OpSearch v-model="searchValue" show-action shape="round" placeholder="请输入搜索关键词" @search="onSearch" @cancel="emits('cancel')" />

    <div v-if="!searchValue">搜索页面</div>

    <div v-else class="search-view__result">
      <div v-if="searchStatus === SearchStatusEnum.DOING" class="searching">~正在搜索中~</div>
      <template v-if="searchStatus === SearchStatusEnum.DONE">
        <div v-for="v in searchResult" :key="v.label" class="result-item">
          <VanIcon name="search" />
          <div class="name">{{ v.label }}</div>
          <div class="count">约{{ v.resultCount }}个结果</div>
        </div>

        <div v-if="!searchResult.length" class="no-result">~暂无推荐~</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { fetchSearchApi } from '@/api/searchAPi';
import type { ISearchResult } from '@/types/home';

const searchValue = ref<string>('');

const emits = defineEmits<{
  cancel: [];
}>();

// 搜索状态枚举
enum SearchStatusEnum {
  INIT = -1,
  DOING = 0,
  DONE = 1,
}

// 搜索列表
const searchResult = ref<ISearchResult[]>([]);
// 搜索状态
const searchStatus = ref<SearchStatusEnum>(SearchStatusEnum.INIT);

/**
 * 搜索
 */
const onSearch = async (keyword?: string | number) => {
  console.log(keyword);
  try {
    searchStatus.value = SearchStatusEnum.DOING;
    const { data: searchData } = await fetchSearchApi(keyword as string);
    searchResult.value = searchData!.list;
  } catch (error) {
    console.log(error);
  } finally {
    searchStatus.value = SearchStatusEnum.DONE;
  }
};
</script>

<style scoped>
@import './style.scss';
</style>
