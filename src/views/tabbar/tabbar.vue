<template>
  <div>
    <router-view />

    <VanTabbar v-model="tabActive">
    <VanTabbarItem name="indexRoute" icon="home-o">首页</VanTabbarItem>
    <VanTabbarItem name="orderRoute" icon="bars">订单</VanTabbarItem>
    <VanTabbarItem name="profileRoute" icon="contact">我的</VanTabbarItem>
  </VanTabbar>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const tabActive = ref(route.name as string); // tab 激活
// console.log(route.name);

watch(tabActive, newVal => {
  console.log(newVal);
  router.push({ name: newVal});
});
</script>

<style scoped>

</style>
