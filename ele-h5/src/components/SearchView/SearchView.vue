<template>
  <div class="search-view">
    <OpSearch v-model="searchValue" show-action shape="round" placeholder="请输入搜索关键词" @search="onSearch" @cancel="emits('cancel')" />

    <div v-if="!searchValue" class="search-view__history">
      <div class="label">历史搜索</div>
      <TransitionGroup name="list">
        <div v-for="v in historyTags" :key="v" class="history-tag" @click="onTagClick(v)">{{ v }}</div>
        <div key="arrow" class="history-tag" @click="toggleHistoryTag">
          <VanIcon :name="isHistoryTagShown ? 'arrow-up' : 'arrow-down'" />
        </div>
      </TransitionGroup>
    </div>

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
import { ref, computed, watch } from 'vue';
import { useToggleHook } from '@/hooks/useToggleHook';
import { useDebounceHook } from '@/hooks/useDebounceHook';
import { fetchSearchApi } from '@/api/searchApi';
import type { ISearchResult } from '@/types/home';
const HISTOY_TAGS = ['比萨', '好利来', '鱿鱼', '清蒸鲈鱼', '切果NOW', '炒饭', '玉米', '牛腩', '土豆焗饭', '烧烤', '水果'];

// 数组解构
const [isHistoryTagShown, toggleHistoryTag] = useToggleHook(false);
const historyTags = computed(() => (isHistoryTagShown.value ? HISTOY_TAGS : HISTOY_TAGS.slice(0, 5)));

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

const debounceValue = useDebounceHook(searchValue, 1000);
watch(debounceValue, (nv) => {
  if (!nv) {
    searchResult.value = [];
    return;
  }
  onSearch(nv);
});

/**
 * 点击历史搜索
 */
const onTagClick = (v: string) => {
  searchValue.value = v;
  onSearch(v);
};

/**
 * 搜索
 */
const onSearch = async (keyword?: string | number) => {
  console.log(keyword);
  try {
    searchStatus.value = SearchStatusEnum.DOING;
    const { data: searchData } = await fetchSearchApi(keyword as string);
    // console.log(searchData?.list);
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
