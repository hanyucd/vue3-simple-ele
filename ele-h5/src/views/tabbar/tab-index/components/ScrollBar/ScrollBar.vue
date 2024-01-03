<template>
  <div class="home-scroll-bar">
    <div class="home-scroll-bar__swipe">
      <div ref="containerRef">
        <div v-for="v in props.data" :key="v.type" class="swipe-item">
          <div class="scroll-bar__info" :class="`scroll-bar__info__${v.type}`">
            <span class="info-badge">{{ v.badge }}</span>
            <span class="info-detail" v-html="v.detail"></span>
            <span class="info-btn op-thin-border">{{ v.btn }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { IScrollBarInfo } from '@/types/home';

import { useIntervalHook } from '@/hooks/useIntervalHook';

interface IProps {
  intervalTime?: number;
  transitionTime?: number;
  height: number;
  data: IScrollBarInfo[];
}
const props = withDefaults(defineProps<IProps>(), {
  intervalTime: 4000,
  transitionTime: 2000,
  height: 40,
});

const containerRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const container = containerRef.value;
  const count = container!.children.length;
  const firstSwipeItem = container!.children[0];
  container!.style.height = `${count * props.height}px`;
  let index = 0;

  useIntervalHook(() => {
    index++;
    // 如果超过item个数就需要将第一个元素接到后面
    if (index >= count) {
      (firstSwipeItem as HTMLDivElement).style.transform = `translateY(${index * props.height}px)`;
      // 第一个滚动动画结束之后，将整个container位置重置
      const timeout = setTimeout(() => {
        // 重置逻辑
        (firstSwipeItem as HTMLDivElement).style.transform = '';
        container!.style.transform = '';
        container!.style.transition = '';
        clearTimeout(timeout);
      }, props.transitionTime);
    }
    container!.style.transform = `translateY(-${index * props.height}px)`;
    container!.style.transition = `all linear ${props.transitionTime}ms`;
    index = index % count;
  }, props.intervalTime);
});
</script>

<style lange="scss">
@import './style.scss';
</style>
