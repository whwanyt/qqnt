<script setup lang="ts">
import { GlobalTheme, GlobalThemeOverrides } from 'naive-ui';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { darkTheme } from 'naive-ui';
import { ref } from 'vue';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    bodyColor: '#f2f2f2'
  }
};
const route = useRoute();

const theme = ref<GlobalTheme | null>(null);
watch(
  () => route.path,
  () => {
    if (route.query.drak === 'true') {
      theme.value = darkTheme;
    }
  },
  { immediate: true }
);
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-global-style />
    <n-el>
      <router-view />
    </n-el>
  </n-config-provider>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
