<script setup lang="ts">
// import { RouterView } from 'vue-router';
import { fetchTest } from '@/api/testApi';

fetchTest().then((res) => {
  console.log(res);
});
</script>

<template>
  <router-view />
</template>

<style>
#app {
  /** 字体抗锯齿， 让字体看起来更清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  --op-gray-bg-color: rgb(244, 244, 244);
}
</style>
