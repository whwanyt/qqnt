<template>
  <div class="chat-view no-drag">
    <div class="head">
      <div class="title">无痕</div>
      <div class="funs">
        <div class="fun" @click="onCall">
          <n-icon :size="22"><Phone /></n-icon>
        </div>
        <div class="fun" @click="onCall">
          <n-icon :size="22"><VideocamOutline /></n-icon>
        </div>
        <div class="fun">
          <n-icon :size="22"><ScreenShareOutlined /></n-icon>
        </div>
        <div class="fun">
          <n-icon :size="22"><EllipsisHorizontal /></n-icon>
        </div>
      </div>
    </div>
    <splitpanes class="view" horizontal>
      <pane>
        <message />
      </pane>
      <pane :size="40" :max-size="50" :min-size="30">
        <chat-input />
      </pane>
    </splitpanes>
  </div>
</template>

<script setup lang="ts">
import { ScreenShareOutlined } from '@vicons/material';
import { VideocamOutline, EllipsisHorizontal } from '@vicons/ionicons5';
import { Phone } from '@vicons/carbon';
import ChatInput from './chatInput.vue';
import Message from './message.vue';
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';

const onCall = () => {
  window.nativeApi.openWin({ moduleName: 'call', url: '/call?drak=true', width: 810, height: 580 });
};
</script>

<style scoped lang="less">
.chat-view {
  width: calc(var(--main-width) - var(--left-width));
  height: calc(var(--main-height) - var(--header-height));
}
.head {
  padding: 0 15px 0 20px;
  display: flex;
  justify-content: space-between;
  height: 35px;
  border-bottom: 1px solid var(--border-color);
  .title {
    font-size: 16px;
    line-height: 35px;
  }
  .funs {
    display: flex;
    .fun {
      width: 35px;
      height: 35px;
      margin-left: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--text-color-base);
      &:hover {
        color: var(--info-color);
      }
    }
  }
}
.view {
  height: calc(var(--main-height) - var(--header-height) - 35px);
}
:deep(.splitpanes--horizontal) {
  .splitpanes__pane {
    transition: none;
  }
  > .splitpanes__splitter {
    min-height: 1px;
    background: var(--border-color);
  }
}
</style>
