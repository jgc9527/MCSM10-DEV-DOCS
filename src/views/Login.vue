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
    <!-- Right Login square -->
    <div class="right-square">
      <div class="square1"></div>
      <div class="square2"></div>
      <div class="square2"></div>
    </div>
    <CardPanel :class="{ 'login-panel': true, Logging: logging }">
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
</template>

<style lang="scss" scoped>
.right-square {
  position: absolute;
  right: -20px;
  background-color: red;
  .square1 {
    height: 200px;
    width: 200px;
    background-color: red;
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
  z-index: 998;

  .login-panel {
    max-width: 420px;
    width: 100%;

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
}
</style>
