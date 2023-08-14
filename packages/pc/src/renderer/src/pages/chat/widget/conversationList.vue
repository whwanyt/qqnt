<template>
  <div class="conversation-list">
    <div class="search">
      <n-space :wrap="false">
        <n-input size="small" class="no-drag" placeholder="搜索">
          <template #prefix>
            <n-icon><SearchOutline /> </n-icon>
          </template>
        </n-input>
        <n-dropdown class="no-drag" trigger="click" placement="bottom-start" :options="addOptions" @select="handleAddSelect">
          <n-button size="small" class="add-btn no-drag" strong secondary>
            <template #icon>
              <n-icon><AddOutline /></n-icon>
            </template>
          </n-button>
        </n-dropdown>
      </n-space>
    </div>
    <div class="list no-drag">
      <div class="item active">
        <n-avatar round :size="38" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        <div class="info">
          <div class="user">
            <div class="name">无痕，我在人...（2）</div>
            <div class="time">08:04</div>
          </div>
          <div class="foot">
            <div class="label">你邀请了肖生克的救赎加入...</div>
            <div class="mute"></div>
          </div>
        </div>
      </div>
      <div class="item">
        <n-avatar round :size="38" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        <div class="info">
          <div class="user">
            <div class="name">我在人间凑数</div>
            <div class="time">08:04</div>
          </div>
          <div class="foot">
            <div class="label">111</div>
            <div class="mute"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchOutline, AddOutline } from '@vicons/ionicons5';

const addOptions = [
  {
    label: '发起群聊',
    key: '1'
  },
  {
    label: '加好友/群',
    key: '2'
  }
];

const onOpenGroup = () => {};
const onAddFriendAndGroup = () => {
  window.nativeApi.openWin({ moduleName: 'addFriendAndGroup', url: '/add', resizable: false, width: 320, height: 420 });
};
const handleAddSelect = (key: string) => {
  const info = addOptions.find((item) => item.key === key);
  if (info) {
    switch (info.key) {
      case '1':
        onOpenGroup();
        break;
      case '2':
        onAddFriendAndGroup();
        break;
      default:
        break;
    }
  }
};
</script>

<style scoped lang="less">
.conversation-list {
  width: var(--sidebar-width);
  background-color: var(--base-color);
  display: flex;
  flex-direction: column;
}
.search {
  padding: 30px 15px 8px;
  .add-btn {
    width: 30px;
    height: 30px;
  }
}
.list {
  flex: 1;
  .item {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    &:hover {
      background-color: var(--tag-color);
    }
    .info {
      flex: 1;
      padding-left: 10px;
      .user {
        display: flex;
        justify-content: space-between;
        .name {
          font-size: 14px;
        }
        .time {
          color: var(--text-color-disabled);
          font-size: 10px;
        }
      }
      .label {
        font-size: 12px;
        color: var(--text-color-3);
      }
    }
  }
  .active {
    color: #fff;
    background-color: var(--info-color-hover);
    &:hover {
      background-color: var(--info-color-hover);
    }
    .info {
      .user {
        .time {
          color: #fff;
        }
      }
      .label {
        color: #fff;
      }
    }
  }
}
</style>
