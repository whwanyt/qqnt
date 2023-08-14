<template>
  <div class="login drag">
    <div v-if="true" class="user-login drag">
      <div class="logo">QQ</div>
      <n-avatar class="avatar no-drag" round :size="92" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      <div class="name">我在人间凑数</div>
      <n-button class="btn no-drag" type="info" @click="onLogin">登录</n-button>
      <div class="funs no-drag">
        <div class="fun">添加账号</div>
        <div class="fun">移除账号</div>
      </div>
    </div>
    <div v-if="false" class="qrcode-form drag">
      <div class="logo">QQ</div>
      <div class="qrcode no-drag"></div>
      <div class="label">请使用手机QQ扫码登录</div>
      <div class="funs no-drag">
        <div class="fun">账密登录</div>
        <div class="fun">注册账号</div>
      </div>
    </div>
    <div v-if="false" class="user-form drag">
      <n-avatar class="avatar no-drag" round :size="80" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      <div class="form no-drag">
        <n-space vertical size="large">
          <input class="input" type="text" placeholder="输入QQ号" />
          <input class="input" type="text" placeholder="输入QQ密码" />
          <div class="label">
            <n-radio :checked="checkedValue" @click="handleChange"
              >已阅读并同意 <span class="hit">服务协议</span>和
              <span class="hit">QQ隐私保护指引</span>
            </n-radio>
          </div>
          <n-button block type="info">登录</n-button>
        </n-space>
      </div>
    </div>
    <div class="quit no-drag" @click="onQuit">
      <n-icon size="18">
        <CloseOutline />
      </n-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CloseOutline } from '@vicons/ionicons5';
import { ref } from 'vue';
const onQuit = () => {
  window.nativeApi.AppQuit();
};

const checkedValue = ref<boolean>(false);
const handleChange = () => {
  checkedValue.value = !checkedValue.value;
};

const onLogin = () => {
  window.nativeApi.openWin({ moduleName: 'main', width: 1160, height: 670 });
  setTimeout(() => {
    window.nativeApi.WindowQuit({ winViewId: window.winViewId });
  });
};
</script>

<style scoped lang="less">
.login {
  width: var(--main-width);
  height: var(--main-height);
  background: url('../assets//images//back.png') no-repeat;
  background-size: 100% 100%;
  .quit {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: var(--error-color-hover);
      color: #fff;
    }
  }
  .user-login {
    width: var(--main-width);
    height: var(--main-height);
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      padding-top: 30px;
      text-align: center;
      font-size: 32px;
    }
    .avatar {
      margin: 50px auto 20px;
      display: flex;
      justify-content: center;
    }
    .name {
      text-align: center;
      font-size: 16px;
      padding-bottom: 80px;
    }
    .btn {
      width: 180px;
    }
    .funs {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      font-size: 12px;
      .fun {
        padding: 0 10px 0;
        height: 25px;
        line-height: 25px;
        position: relative;
        color: var(--info-color);
        cursor: pointer;
        &::after {
          position: absolute;
          content: '';
          right: 0;
          width: 1px;
          height: 15px;
          top: 5px;
          background-color: #dedede;
        }
        &:last-child {
          &::after {
            display: none;
          }
        }
      }
    }
  }
  .qrcode-form {
    width: var(--main-width);
    height: var(--main-height);
    .logo {
      padding-top: 20px;
      text-align: center;
      font-size: 32px;
    }
    .qrcode {
      margin: 20px auto;
      width: 190px;
      height: 190px;
      background-color: #dedede;
      border-radius: 6px;
    }
    .label {
      text-align: center;
      font-size: 16px;
      color: var(--text-color-2);
    }
  }
  .user-form {
    width: calc(var(--main-width) - 56px);
    height: calc(var(--main-height) - 88px);
    padding: 28px;
    padding-top: 60px;
    .avatar {
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
    .form {
      padding-top: 25px;
      width: 100%;
      .input {
        width: 100%;
        border-radius: 5px;
        height: 37px;
        padding: 4px 0 4px;
        line-height: 37px;
        font-size: 18px;
        border: none;
        outline: none;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.6);
        &:focus {
          background-color: rgba(255, 255, 255, 1);
        }
      }
      .label {
        padding-bottom: 10px;
        :deep(.n-radio__label) {
          font-size: 12px;
        }
        .hit {
          color: var(--info-color);
        }
      }
    }
  }
}
</style>
