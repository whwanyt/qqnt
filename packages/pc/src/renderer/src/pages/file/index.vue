<template>
  <div class="file-management">
    <div class="menus">
      <n-menu :options="menuOptions" v-model:value="activeKey" />
      <n-divider class="divider" />
      <n-menu :options="menuTwoOptions" v-model:value="activeKey" />
    </div>
    <div class="layout">
      <div class="head drag">
        <head-funs />
      </div>
      <div class="title">文件管理器</div>
      <div class="tab-list">
        <n-tabs default-value="userFiles">
          <n-tab-pane name="userFiles" tab="我的文件">
            <n-scrollbar style="overflow-y: auto; height: calc(var(--main-height) - 130px)">
              <n-list class="list" hoverable clickable>
                <n-list-item v-for="item in 20" :key="item">
                  <div class="item">
                    <div class="left">
                      <div class="icon"></div>
                      <div class="info">
                        <div class="name">测试{{ item }}.text</div>
                        <div class="size">44.5KB</div>
                      </div>
                    </div>
                    <div class="right">
                      <div class="time">2018-01-12</div>
                      <div class="label">来自文件传输助手</div>
                    </div>
                  </div>
                </n-list-item>
              </n-list>
            </n-scrollbar>
          </n-tab-pane>
          <n-tab-pane name="groupFiles" tab="群文件">
            <n-scrollbar style="overflow-y: auto; height: calc(var(--main-height) - 130px)">
              <n-list class="list" hoverable clickable>
                <n-list-item v-for="item in 3" :key="item">
                  <div class="item">
                    <div class="left">
                      <div class="icon"></div>
                      <div class="info">
                        <div class="name">测试群文件{{ item }}.text</div>
                        <div class="size">44.5KB</div>
                      </div>
                    </div>
                    <div class="right">
                      <div class="time">2018-01-12</div>
                      <div class="label">来自文件传输助手</div>
                    </div>
                  </div>
                </n-list-item>
              </n-list>
            </n-scrollbar>
          </n-tab-pane>
          <template #suffix>
            <div class="suffix">
              <n-select class="sort-select" v-model:value="sortValue" size="tiny" :options="sortOptions" />
            </div>
          </template>
        </n-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeadFuns from '@renderer/components/headFuns.vue';
import { PersonOutline, ChatbubbleOutline, DocumentTextOutline } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { ref } from 'vue';
import { Component, h } from 'vue';
function renderIcon(icon: Component) {
  return () => h(NIcon, { size: 16 }, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: '我的文件',
    key: '1'
  },
  {
    label: '发送人',
    key: '2',
    icon: renderIcon(PersonOutline)
  },
  {
    label: '会话',
    key: '3',
    icon: renderIcon(ChatbubbleOutline)
  },
  {
    label: '类型',
    key: '4',
    icon: renderIcon(DocumentTextOutline)
  }
];
const activeKey = ref('1');
const menuTwoOptions = [{ label: '群文件', key: '5' }];

const sortOptions = [
  {
    label: '按综合排序',
    value: 1
  },
  {
    label: '按最新时间',
    value: 2
  },
  {
    label: '按最旧时间',
    value: 3
  },
  {
    label: '按从大到小',
    value: 4
  },
  {
    label: '按从小到大',
    value: 5
  }
];
const sortValue = ref(1);
</script>

<style scoped lang="less">
.file-management {
  width: var(--main-width);
  height: var(--main-height);
  display: flex;
}
.divider {
  margin-top: 0px;
  margin-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
.menus {
  padding-top: 20px;
  width: 120px;
  background-color: var(--base-color);
  :deep(.n-menu .n-menu-item) {
    height: 35px;
    .n-menu-item-content {
      padding-left: 10px !important;
      &::before {
        border-radius: 8px;
      }
    }
    .n-menu-item-content__icon {
      margin-right: 0px !important;
    }
    .n-menu-item-content-header {
      padding-left: 6px;
    }
  }
}
.layout {
  flex: 1;
  .head {
    display: flex;
    justify-content: end;
  }
  .title {
    font-size: 18px;
    padding-left: 40px;
  }
  .page {
    width: calc(var(--main-width) - 120px);
    height: var(--main-height);
    overflow: hidden;
  }
}
.tab-list {
  margin: 20px;
  margin-top: 15px;
  background-color: var(--base-color);
  border-radius: 10px;
  overflow: hidden;
  :deep(.n-tabs-nav) {
    padding-left: 15px;
    padding-right: 15px;
    height: 45px;
    border-bottom: 1px solid var(--n-tab-border-color);
  }
  :deep(.n-tab-pane) {
    padding: 0;
  }
}
.list {
  :deep(.n-list-item) {
    padding: 10px 15px 10px;
  }
  .item {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      .icon{
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background-color: var(--avatar-color);
      }
      .info {
        padding-left: 15px;
        .name {
          font-size: 16px;
        }
        .size {
          color: var(--text-color-3);
          font-size: 12px;
        }
      }
    }
    .right {
      text-align: right;
      font-size: 12px;
      color: var(--text-color-3);
    }
  }
}
.sort-select {
  width: 120px;
}
</style>
