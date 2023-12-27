<template>
  <TheTop :recomments="recomments" />
</template>

<script setup lang="ts">
import TheTop from './components/TheTop/TheTop.vue';

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
