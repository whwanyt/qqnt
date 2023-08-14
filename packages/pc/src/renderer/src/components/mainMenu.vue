<template>
  <div class="sidebar">
    <n-avatar class="avatar" round :size="36" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
    <div class="menus no-drag">
      <div
        class="menu"
        v-for="item in menus"
        :key="item.id"
        :class="item.id === active ? 'active' : ''"
        @click="onMenuItem(item)"
      >
        <n-icon :size="24">
          <component :is="item.icon" />
        </n-icon>
      </div>
    </div>

    <div class="funs no-drag">
      <div class="fun">
        <n-icon :size="24">
          <MailOutline />
        </n-icon>
      </div>
      <div class="fun" @click="onFileWin">
        <n-icon :size="24">
          <FolderOutline />
        </n-icon>
      </div>
      <div class="fun">
        <n-icon :size="24">
          <BookmarksOutline />
        </n-icon>
      </div>
      <n-dropdown class="no-drag" placement="right-start" trigger="click" :options="dropdownOptions" @select="handleSelect">
        <div class="fun">
          <n-icon :size="26">
            <ReorderFourOutline />
          </n-icon>
        </div>
      </n-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChatbubbleOutline,
  PersonOutline,
  PlanetOutline,
  FolderOutline,
  BookmarksOutline,
  MailOutline,
  ReorderFourOutline
} from '@vicons/ionicons5';
import { VNode, ref } from 'vue';
import { h } from 'vue';

const dropdownOptions = [
  {
    label: '导入历史消息',
    key: '1'
  },
  {
    label: '检查更新',
    key: '2'
  },
  {
    label: '帮助',
    key: '3',
    children: [
      {
        label: '帮助中心',
        key: '3_1'
      },
      {
        label: '安全中心',
        key: '3_2'
      },
      {
        label: '意见反馈',
        key: '3_3'
      },
      {
        label: 'QQ官网',
        key: '3_4'
      }
    ]
  },
  {
    label: '关于',
    key: '4'
  },
  {
    label: '设置',
    key: '5'
  }
];

type MenuItem = {
  id: number;
  name: string;
  path?: string;
  icon: VNode;
};
const menus: MenuItem[] = [
  {
    id: 1,
    name: '聊天',
    path: '/chat',
    icon: h(ChatbubbleOutline)
  },
  {
    id: 2,
    name: '好友',
    icon: h(PersonOutline)
  },
  {
    id: 3,
    name: '空间',
    icon: h(PlanetOutline)
  }
];
const active = ref(1);

const onMenuItem = (item: any) => {
  switch (item.id) {
    case 1:
      active.value = item.id;
      break;
    case 3:
      window.nativeApi.openWin({ moduleName: 'qzone', url: '/qzone', width: 590, height: 900 });
      break;
    default:
      break;
  }
};

const handleSelect = (key: string) => {
  switch (key) {
    case '4':
      onAboutWin();
      break;
    default:
      break;
  }
};

const onAboutWin = () => {
  window.nativeApi.openWin({ moduleName: 'about', url: '/about', width: 480, height: 360 });
};

const onFileWin = () => {
  window.nativeApi.openWin({ moduleName: 'fileManagement', url: '/fileManagement', width: 840, height: 600 });
};
</script>

<style scoped lang="less">
.sidebar {
  width: var(--menu-width);
  height: var(--main-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  .avatar {
    margin-top: 30px;
  }
  .menus {
    padding-top: 20px;
    .menu {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      margin-bottom: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: var(--rail-color);
      }
    }
    .active {
      color: var(--info-color);
      background-color: var(--rail-color);
    }
  }
  .funs {
    margin-top: auto;
    .fun {
      margin-top: 2px;
      width: 40px;
      height: 40px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: var(--info-color);
      }
    }
  }
}
</style>
