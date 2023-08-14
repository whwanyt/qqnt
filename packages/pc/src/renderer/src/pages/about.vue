<template>
  <div class="about drag">
    <div class="head">
      <head-funs :is-maximize="false"/>
    </div>
    <div class="logo">QQ</div>
    <div class="versions">
      <div class="label">版本：9.9.0-14619</div>
      <div class="label">版本：9.9.0-14619</div>
    </div>
    <div class="foot">基于QQNT技术架构</div>
  </div>
</template>

<script setup lang="ts">
import HeadFuns from '@renderer/components/headFuns.vue';
</script>

<style scoped lang="less">
.about {
  width: var(--main-width);
  height: var(--main-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  .head {
    position: fixed;
    top: 0;
    right: 0;
  }
  .logo {
    padding-top: 70px;
    font-size: 52px;
  }
  .versions{
    padding-top: 40px;
    font-size: 14px;
  }
  .foot{
    padding-top: 60px;
  }
}
</style>
