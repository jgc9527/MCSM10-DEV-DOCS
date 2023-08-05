<script setup lang="ts">
import { useCardPool } from "@/stores/useCardPool";
import LayoutCardComponent from "@/components/cards/LayoutCard.vue";
import { ref, computed } from "vue";
import type { LayoutCard } from "@/types";
import { useLayoutConfigStore } from "@/stores/useLayoutConfig";
import { useLayoutContainerStore } from "@/stores/useLayoutContainerStore";

const { getCardPool } = useCardPool();
const { insertLayoutItem } = useLayoutConfigStore();
const { containerState } = useLayoutContainerStore();
const display = computed(() => {
  cardPool = getCardPool();
  return containerState.showNewCardDialog;
});
let cardPool = getCardPool();

const insertCardToLayout = (card: LayoutCard) => {
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
            <div class="text-h6">
              {{ card.title }}
            </div>
            <div class="text-body-1">
              {{ card.description }}
            </div>
          </a-col>
          <a-col span="24" :sm="card.width * 2">
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
</template>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.card-container-wrapper {
  border: 1px dashed $gray-border-color;
  border-radius: 4px;
  padding: 16px;
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

  // animation: moveTop 0.6s ease-in-out;
  // transition: all 0.6s;

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

// @keyframes moveTop {
//   from {
//     top: 110%;
//   }
//   to {
//     top: 0;
//   }
// }
</style>
