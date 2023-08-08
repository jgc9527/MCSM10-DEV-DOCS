<script setup lang="ts">
import { useCardPool } from "@/stores/useCardPool";
import LayoutCardComponent from "@/components/cards/LayoutCard.vue";
import { ref, computed, type Ref } from "vue";
import type { LayoutCard } from "@/types";
import { useLayoutConfigStore } from "@/stores/useLayoutConfig";
import { useLayoutContainerStore } from "@/stores/useLayoutContainerStore";
import { useRoute } from "vue-router";
import Params from "./params.vue";

const { getCardPool } = useCardPool();
const { insertLayoutItem } = useLayoutConfigStore();
const { containerState } = useLayoutContainerStore();

// 获取当前 router
const route = useRoute();

const display = computed(() => {
  cardPool = getCardPool()
    .filter((v) => (v.onlyPath ? v.onlyPath.includes(route.path) : true))
    .filter((v) => !v.disableAdd);
  return containerState.showNewCardDialog;
});

const paramsDialog = ref<InstanceType<typeof Params>>();

let cardPool = getCardPool();

const insertCardToLayout = async (card: LayoutCard) => {
  if (card.params) {
    const isParamsOk = await paramsDialog.value?.openDialog(card);
    if (!isParamsOk) return;
  }

  const newCard = JSON.parse(JSON.stringify(card));
  insertLayoutItem("", newCard);
  containerState.showNewCardDialog = false;
};
</script>

<template>
  <Transition name="global-action-float">
    <div
      v-if="display"
      class="new-card-list-container"
      @click="containerState.showNewCardDialog = false"
    >
      <div class="new-card-list">
        <a-row
          v-for="card in cardPool"
          :key="card.id"
          style="margin-bottom: 20px"
        >
          <a-col span="24">
            <a-typography>
              <a-typography-title :level="4">
                <span class="global-text-white-border">
                  {{ card.title }}
                </span>
              </a-typography-title>
              <a-typography-paragraph>
                {{ card.description }}
              </a-typography-paragraph>
            </a-typography>
          </a-col>
          <a-col span="24" :md="24" :lg="card.width * 2">
            <div class="card-container-wrapper">
              <LayoutCardComponent
                class="card-list-container"
                :id="'card-card-container-' + card.id"
                :data-id="card.id"
                :card="card"
                :style="{ height: card.height }"
                @click="() => insertCardToLayout(card)"
              >
              </LayoutCardComponent>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </Transition>

  <Params ref="paramsDialog"></Params>
</template>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.card-container-wrapper {
  border: 1px dashed $gray-border-color;
  border-radius: 4px;
  padding: 16px;
  overflow: auto;
}
.new-card-list-container {
  position: fixed;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  padding: 24px;

  background-color: $new-card-list-background-color;
  backdrop-filter: saturate(100%) blur(12px);
  z-index: 999;
  overflow-y: auto;

  .new-card-list {
    margin: auto;
    max-width: 1440px;
  }

  .card-list-container {
    cursor: pointer;
  }
  .card-list-container:hover {
    opacity: 0.8;

    transform: scale(1.02);
  }
}
</style>
