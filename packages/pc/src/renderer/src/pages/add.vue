<template>
  <div class="add">
    <div class="head drag">
      <div class="title">加好友/群</div>
      <head-funs :is-maximize="false" :is-minimize="false" />
    </div>
    <div class="page">
      <div class="search">
        <n-input-group>
          <n-input size="small" placeholder="QQ群/手机号/群">
            <template #prefix>
              <n-icon><SearchOutline /> </n-icon>
            </template>
          </n-input>
          <n-button :style="{ width: '60px' }" size="small" type="info"> 搜索 </n-button>
        </n-input-group>
      </div>
      <div class="list" v-if="searchList.length > 0"></div>
      <n-empty v-else class="empty" description="快来发现更多朋友">
        <template #icon>
          <ContactsOutlined />
        </template>
      </n-empty>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchOutline } from '@vicons/ionicons5';
import { ContactsOutlined } from '@vicons/material';
import HeadFuns from '@renderer/components/headFuns.vue';
import { ref } from 'vue';
const searchList = ref([]);
</script>

<style scoped lang="less">
.add {
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
.page {
  padding: 10px 15px 5px;
  --list-width: calc(var(--main-width) - 30px);
  --list-height: calc(var(--main-height) - 45px - var(--header-height));
  .search {
    width: 100%;
    height: 30px;
  }
  .list {
    width: var(--list-width);
    height: var(--list-height);
  }
  .empty {
    width: var(--list-width);
    height: var(--list-height);
    display: flex;
    justify-content: center;
    align-items: center;
    :deep(.n-empty__icon) {
      color: var(--text-color-base);
    }
    :deep(.n-empty__description) {
      padding-top: 30px;
      color: var(--text-color-base);
    }
  }
}
</style>
