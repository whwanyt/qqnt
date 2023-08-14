<template>
  <div class="qzone">
    <div class="head drag">
      <div class="tools no-drag">
        <div class="tool">
          <n-icon :size="18">
            <ArrowBackIosNewOutlined />
          </n-icon>
        </div>
        <div class="tool">
          <n-icon :size="18">
            <ArrowForwardIosOutlined />
          </n-icon>
        </div>
        <div class="tool">
          <n-icon :size="22">
            <RefreshOutlined />
          </n-icon>
        </div>
      </div>
      <div class="title">QQ空间</div>
      <head-funs :is-maximize="false" />
    </div>
    <div class="view"></div>
  </div>
</template>

<script setup lang="ts">
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined, RefreshOutlined } from '@vicons/material';
import HeadFuns from '@renderer/components/headFuns.vue';

//
</script>

<style scoped lang="less">
.qzone {
  width: var(--main-width);
  height: var(--main-height);
  display: flex;
  flex-direction: column;
}
.head {
  width: var(--main-width);
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    text-align: center;
    font-size: 12px;
    line-height: var(--header-height);
  }
}
.tools {
  padding-left: 1px;
  display: flex;
  .tool {
    width: var(--header-height);
    height: var(--header-height);
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: var(--action-color);
    }
  }
}
.view {
  flex: 1;
  background-color: #fff;
}
</style>
