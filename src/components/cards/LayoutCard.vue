<script setup lang="ts">
import EmptyCard from '@/components/card-implement/EmptyCard.vue'
import ExampleCard from '@/components/card-implement/ExampleCard.vue'
import ExampleCard2 from '@/components/card-implement/ExampleCard2.vue'
import type { LayoutCard } from '../../types/index'

const props = defineProps<{
  card: LayoutCard
}>()

// Component List
const componentMap: { [key: string]: any } = {
  ExampleCard,
  ExampleCard2,
  EmptyCard
}
</script>

<template>
  <div
    :id="'layout-card-container-' + card.id"
    class="layout-card-container transition-all-6 global-drag-animation"
  >
    <component style="height: 100%" :card="props.card" :is="componentMap[card.type]"></component>
  </div>
</template>

<style lang="scss" scoped>
.layout-card-container {
  width: 100%;
  height: 100%;
}
</style>
