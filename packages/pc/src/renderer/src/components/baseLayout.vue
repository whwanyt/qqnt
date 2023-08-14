<template>
  <div class="base-layout drag">
    <main-menu />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import mainMenu from './mainMenu.vue';
</script>

<style scoped lang="less">
.base-layout {
  width: var(--main-width);
  height: var(--main-height);
  display: flex;
  overflow: hidden;
}
</style>
