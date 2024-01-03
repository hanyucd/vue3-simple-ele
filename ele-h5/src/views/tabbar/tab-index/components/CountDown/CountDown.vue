<template>
  <div class="home-countdown">
    <div class="home-countdown__info">
      <img class="logo" src="@/assets/imgs/index_page/count-down.png" />
      <span class="number">{{ padStart(current.hours) }}</span>
      <span class="colon">:</span>
      <span class="number">{{ padStart(current.mintutes) }}</span>
      <span class="colon">:</span>
      <span class="number">{{ padStart(current.seconds) }}</span>
    </div>

    <div class="home-countdown__goods">
      <img class="goods-img" :src="data.goods.imgUrl" />
      <div class="goods-name op-ellipsis">{{ data.goods.name }}</div>
      <div class="goods-price">
        <span class="goods-price__now">
          ￥<span>{{ data.goods.price }}</span>
        </span>
        <span class="goods-price__old">
          ￥<span>{{ data.goods.oldPrice }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICountdown } from '@/types/home';
import { useCountDownHook } from '@/hooks/useCountDownHook';

interface IProps {
  data: ICountdown;
}

const props = defineProps<IProps>();

const countDown = useCountDownHook({
  time: props.data.time,
  millisecond: false,
});

// 开始计时
countDown.start();
const { current } = countDown;

const padStart = (num: number) => {
  return num.toString().padStart(2, '0');
};
</script>

<style lange="scss">
@import './style.scss';
</style>
