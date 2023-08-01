<script setup lang="ts">
import type { LayoutCard } from '@/types'
import { onUnmounted } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'

const props = defineProps<{
  card: LayoutCard
}>()

const test = ref(0)
let task: any = null

onMounted(() => {
  console.log('组件' + props.card.title + ' onMounted()')
  task = setInterval(() => {
    test.value++
  }, 200)
})

onUnmounted(() => {
  console.log('组件' + props.card.title + ' onUnmounted()')
  clearInterval(task)
})
</script>

<template>
  <div style="height: 100%">
    <v-card height="100%">
      <template v-slot:title>
        {{ props.card.title }}
      </template>

      <template v-slot:text>
        <div>
          ID：<small>{{ props.card.id }}</small>
        </div>
        <div>宽度：{{ props.card.width }}</div>
        <div>跟随：{{ card.followId }}</div>
        <div>测试值：{{ test }}</div>
      </template>
    </v-card>
  </div>
</template>
