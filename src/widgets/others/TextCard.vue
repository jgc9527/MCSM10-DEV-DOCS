<script setup lang="ts">
import { parse } from "marked";
import { ref } from "vue";
import { $t as t } from "@/lang/i18n";
import CardPanel from "@/components/CardPanel.vue";
import { useLayoutContainerStore } from "@/stores/useLayoutContainerStore";
import { useLayoutCardTools } from "@/hooks/useCardTools";

import type { LayoutCard } from "@/types/index";

enum EDIT_MODE {
  PREVIEW = "PREVIEW",
  EDIT = "EDIT",
}

const props = defineProps<{
  card: LayoutCard;
}>();

const { getMetaValue, setMetaValue } = useLayoutCardTools(props.card);
const { containerState } = useLayoutContainerStore();

const textContent = ref<string>(getMetaValue("textContent", ""));
const status = ref(EDIT_MODE.PREVIEW);

// function
const previewsTextContent = () => {
  setMetaValue("textContent", textContent.value);
  status.value = EDIT_MODE.PREVIEW;
};

const editTextContent = () => {
  status.value = EDIT_MODE.EDIT;
};
</script>

<template>
  <CardPanel style="height: 100%">
    <!-- title -->
    <template #title
      >{{ t("自定义文本框") }}
      <!-- btns -->
      <div
        class="btns-group"
        v-if="containerState.isDesignMode"
        style="display: inline-block"
      >
        <a-button
          type="primary"
          v-if="status !== EDIT_MODE.PREVIEW"
          @click="previewsTextContent()"
          >{{ t("保存") }}</a-button
        >
        <a-button type="primary" v-else @click="editTextContent()">{{
          t("编辑")
        }}</a-button>
      </div>
    </template>
    <!-- body -->
    <!-- design -->
    <template
      #body
      v-if="containerState.isDesignMode && status == EDIT_MODE.EDIT"
    >
      <!-- edit -->
      <div class="edit">
        <a-textarea
          v-model:value="textContent"
          :placeholder="t(`文本内容 支持 Markdown 语法 可换行`)"
          :rows="4"
        />
      </div>
    </template>
    <!-- previews -->
    <template #body v-else>
      <div class="previews" v-html="parse(textContent)" />
    </template>
  </CardPanel>
</template>

<style scoped lang="scss"></style>
