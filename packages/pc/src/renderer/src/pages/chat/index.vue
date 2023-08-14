<template>
  <div class="chat">
    <conversation-list />
    <div class="room">
      <div class="head">
        <head-funs />
      </div>
      <chat-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeadFuns from '@renderer/components/headFuns.vue';
import ConversationList from './widget/conversationList.vue';
import ChatView from './widget/chatView.vue';
</script>

<style scoped lang="less">
.chat {
  height: var(--main-height);
  display: flex;
}

.room {
  width: calc(var(--main-width) - var(--left-width));
  .head {
    width: 100%;
    display: flex;
    justify-content: end;
  }
}
</style>
