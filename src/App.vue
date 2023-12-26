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

<style scoped></style>
