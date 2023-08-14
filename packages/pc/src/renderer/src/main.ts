import { createApp } from 'vue';
import naive from 'naive-ui';
import App from './App.vue';
import router from './router';

interface WinInfoModel {
  winViewId: number;
  winViewModule: string;
}

const app = createApp(App);
app.use(naive);
app.use(router);

window.nativeApi.ipcRenderer.on('setWinInfo', (_, val: WinInfoModel) => {
  window.winViewId = val.winViewId;
  window.winViewModule = val.winViewModule;
  app.mount('#app');
});
