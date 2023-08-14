<template>
  <div class="call">
    <div class="head drag">
      <div class="title">等待对方接听...</div>
      <head-funs />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeadFuns from '@renderer/components/headFuns.vue';
</script>

<style scoped lang="less">
.call {
  width: var(--main-width);
  height: var(--main-height);
  background-color: var(--base-color);
}
.head {
  width: var(--main-width);
  height: var(--header-height);
  display: flex;
  align-items: center;
  position: relative;
  justify-content: end;
  border-bottom: 1px solid var(--border-color);
  .title {
    left: 0;
    position: absolute;
    width: var(--main-width);
    text-align: center;
  }
}
</style>
