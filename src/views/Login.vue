<script setup lang="ts">
import CardPanel from "@/components/CardPanel.vue";
import { t } from "@/lang/i18n";
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";
import { reactive, ref } from "vue";

const formData = reactive({
  username: "",
  password: "",
});

const logging = ref(false);

const handleLogin = () => {
  logging.value = true;
};
</script>

<template>
  <!-- Background Image -->
  <div class="login-page-bg">
    <a-row :gutter="[24, 24]">
      <a-col :span="6">
        <CardPanel>
          <template #body>
            <a-skeleton :paragraph="{ rows: 4 }" />
          </template>
        </CardPanel>
      </a-col>
      <a-col :span="6">
        <CardPanel>
          <template #body>
            <a-skeleton :paragraph="{ rows: 4 }" />
          </template>
        </CardPanel>
      </a-col>
      <a-col :span="6">
        <CardPanel>
          <template #body>
            <a-skeleton :paragraph="{ rows: 4 }" />
          </template>
        </CardPanel>
      </a-col>
      <a-col :span="6">
        <CardPanel>
          <template #body>
            <a-skeleton :paragraph="{ rows: 4 }" />
          </template>
        </CardPanel>
      </a-col>
      <a-col :span="24">
        <CardPanel>
          <template #body>
            <a-skeleton :paragraph="{ rows: 9 }" />
          </template>
        </CardPanel>
      </a-col>
      <a-col :span="8">
        <CardPanel>
          <template #body>
            <a-skeleton :paragraph="{ rows: 6 }" />
          </template>
        </CardPanel>
      </a-col>
      <a-col :span="16">
        <CardPanel>
          <template #body>
            <a-skeleton :paragraph="{ rows: 6 }" />
          </template>
        </CardPanel>
      </a-col>
      <a-col :span="8">
        <CardPanel>
          <template #body>
            <a-skeleton :paragraph="{ rows: 6 }" />
          </template>
        </CardPanel>
      </a-col>
      <a-col :span="16">
        <CardPanel>
          <template #body>
            <a-skeleton :paragraph="{ rows: 6 }" />
          </template>
        </CardPanel>
      </a-col>
    </a-row>
  </div>

  <!-- Main Window -->
  <div class="login-page-container">
    <div style="position: relative">
      <!-- Right Login square -->

      <div style="z-index: 300; position: relative">
        <CardPanel :class="{ 'login-panel': true }">
          <template #body>
            <div class="login-panel-body">
              <a-typography-title :level="3" class="mb-20">
                {{ t("用户验证") }}
              </a-typography-title>
              <a-typography-paragraph class="mb-20">
                {{ t("使用服务器的 MCSManager 账号进入面板") }}
              </a-typography-paragraph>
              <div>
                <a-input
                  v-model:value="formData.username"
                  :placeholder="t('账号')"
                  size="large"
                >
                  <template #suffix>
                    <UserOutlined style="color: rgba(0, 0, 0, 0.45)" />
                  </template>
                </a-input>

                <a-input
                  class="mt-20"
                  v-model:value="formData.username"
                  :placeholder="t('密码')"
                  size="large"
                >
                  <template #suffix>
                    <LockOutlined style="color: rgba(0, 0, 0, 0.45)" />
                  </template>
                </a-input>

                <div class="mt-24 flex-between align-center">
                  <div class="mcsmanager-link">
                    Powered by
                    <a
                      href="https://mcsmanager.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MCSManager
                    </a>
                  </div>
                  <a-button
                    size="large"
                    type="primary"
                    style="min-width: 100px"
                    @click="handleLogin"
                  >
                    {{ t("验证") }}
                  </a-button>
                </div>
              </div>
            </div>
          </template>
        </CardPanel>
      </div>
      <div :class="{ 'right-square': true, 'right-square-logging': logging }">
        <div class="square1"></div>
        <div class="square2"></div>
        <div class="square3"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-square-logging {
  .square1 {
    right: -80px !important;
    top: -70px !important;
    animation: moveAnimation2 0.8s infinite !important;
    animation-delay: 0s !important;
  }
  .square2 {
    right: 354px !important;
    animation: moveAnimation2 1s infinite !important;
    animation-delay: 0.5s !important;
  }

  .square3 {
    top: 290px !important;
    animation: moveAnimation2 1s infinite !important;
    animation-delay: 1s !important;
  }
}
.square-base {
  position: absolute;
  border-radius: 4px;
  transition: all 0.6s;
  box-shadow: 0 1px 2px 1px var(--card-shadow-color);
  background-color: var(--background-color-white);
  border: 1px solid var(--card-border-color);
  animation: moveAnimation 3.2s infinite;
}
.right-square {
  z-index: 201;
  position: absolute;
  right: 40px;
  top: 24px;
  .square1 {
    @extend .square-base;
    animation-delay: 0s;
    height: 110px;
    width: 110px;
    right: 0px;
    top: 0px;
    background-color: #da04048f;
  }

  .square2 {
    animation-delay: 1s;
    @extend .square-base;
    height: 64px;
    width: 64px;
    right: 100px;
    top: 20px;
    background-color: #2d8cebbf;
  }
  .square3 {
    animation-delay: 2s;
    @extend .square-base;
    height: 80px;
    width: 80px;
    right: 20px;
    top: 74px;
    background-color: #f3b72ad9;
  }
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

.Logging {
  animation: scaleAnimation 1s;
}

.login-page-container {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  background-color: #29292957;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: saturate(120%) blur(10px);
  z-index: 200;

  .login-panel {
    max-width: 420px;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.8);
    backdrop-filter: saturate(120%) blur(12px);

    .login-panel-body {
      padding: 32px 24px;
    }
  }

  .mcsmanager-link {
    text-align: right;
    color: var(--color-gray-7);
    a {
      color: var(--color-gray-7) !important;
      text-decoration: underline;
    }
  }

  @keyframes moveAnimation {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, 8px);
    }
    50% {
      transform: translate(8px, 8px);
    }
    75% {
      transform: translate(8px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes moveAnimation2 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, 2px);
    }
    50% {
      transform: translate(2px, 2px);
    }
    75% {
      transform: translate(2px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
}
</style>
