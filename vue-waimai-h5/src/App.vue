<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- 路由匹配到的组件将渲染在这里 -->
  <RouterView />
</template>

<style>
@import 'normalize.css';

#app {
  /** 字体抗锯齿， 让字体看起来更清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  --op-gray-bg-color: rgb(244, 244, 244)
}
</style>
