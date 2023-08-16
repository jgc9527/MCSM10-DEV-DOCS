<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { $t as t } from "@/lang/i18n";
import { useAppToolsStore } from "@/stores/useAppToolsStore";
import { useLayoutContainerStore } from "@/stores/useLayoutContainerStore";
import CardPanel from "@/components/CardPanel.vue";
import type { LayoutCard } from "@/types/index";
import { Empty } from "ant-design-vue";
import { EditOutlined } from "@ant-design/icons-vue";

const props = defineProps<{
  card: LayoutCard;
}>();

const { containerState } = useLayoutContainerStore();
const urlSrc = ref(
  "http://[fe80::a05d:f06c:f676:dfdf]:24444"
  // "//music.163.com/outchain/player?type=2&id=19606011&auto=1&height=66"
);

const { openInputDialog } = useAppToolsStore();

const editImgSrc = async () => {
  urlSrc.value = (await openInputDialog(t("请输入Url链接"))) as string;
};

const myIframe = ref<HTMLIFrameElement | null>(null);
const myIframeLoading = ref(true);
onMounted(() => {
  if (myIframe.value) {
    myIframe.value.onload = () => {
      myIframeLoading.value = false;
      console.log("iframe加载完拉");
    };
  }
  watch(urlSrc, () => {
    console.log("urlSrc变化拉");
    myIframeLoading.value = true;
  });
});
</script>

<template>
  <div style="width: 100%; height: 100%; position: relative">
    <CardPanel style="height: 100%" v-if="urlSrc !== ''">
      <template #title>
        <span v-if="urlSrc !== '' && containerState.isDesignMode">
          <EditOutlined @click="editImgSrc()" />&nbsp;
        </span>
        Iframe 框
      </template>

      <template #body>
        <a-skeleton
          active
          v-show="!myIframeLoading"
          :paragraph="{ rows: Number(card.height[0]) * 2 }"
        />
        <iframe
          v-show="myIframeLoading"
          ref="myIframe"
          :src="urlSrc"
          :style="{ height: parseInt(card.height) + 'px' }"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
        ></iframe>
      </template>
    </CardPanel>
    <CardPanel v-else style="height: 100%">
      <template #body>
        <a-empty :image="Empty.PRESENTED_IMAGE_SIMPLE">
          <template #description>
            <span>{{ t("暂无网页") }}</span>
          </template>
          <a-button type="primary" @click="editImgSrc()">{{
            t("添加一个")
          }}</a-button>
        </a-empty>
      </template>
    </CardPanel>
  </div>
</template>

<style scoped lang="scss">
iframe {
  width: 100%;
  height: 100%;
}
</style>
