<template>
  <div class="funs no-drag">
    <div class="fun" v-if="props.isMinimize" @click="onMinimize">
      <n-icon :size="16">
        <RemoveOutline />
      </n-icon>
    </div>
    <div class="fun" v-if="props.isMaximize" @click="onMaxOrRestoreimize">
      <n-icon :size="16" v-if="maximizeVal">
        <CopyOutline />
      </n-icon>
      <n-icon :size="16" v-else>
        <BrowsersOutline />
      </n-icon>
    </div>
    <div class="fun err" v-if="props.isClose" @click="onClose">
      <n-icon :size="18">
        <CloseOutline />
      </n-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RemoveOutline, CopyOutline, BrowsersOutline, CloseOutline } from '@vicons/ionicons5';
import { ref } from 'vue';
const props = defineProps({
  isMinimize: {
    type: Boolean,
    default: true
  },
  isMaximize: {
    type: Boolean,
    default: true
  },
  isClose: {
    type: Boolean,
    default: true
  }
});

const maximizeVal = ref(false);
const onMinimize = () => {
  window.nativeApi.WindowMinimize({ winViewId: window.winViewId });
};
const onMaxOrRestoreimize = () => {
  if (maximizeVal.value) {
    window.nativeApi.WindowRestoreSize({ winViewId: window.winViewId });
    maximizeVal.value = false;
  } else {
    window.nativeApi.WindowMaximize({ winViewId: window.winViewId });
    maximizeVal.value = true;
  }
};
const onClose = () => {
  window.nativeApi.WindowQuit({ winViewId: window.winViewId });
};
</script>

<style scoped lang="less">
.funs {
  display: flex;
  justify-content: end;
  align-items: center;
  .fun {
    width: calc(var(--header-height) + 2px);
    height: var(--header-height);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: var(--action-color);
    }
  }
  .err {
    &:hover {
      background-color: var(--error-color-hover);
      color: #fff;
    }
  }
}
</style>
