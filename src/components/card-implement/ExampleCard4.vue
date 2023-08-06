<script setup lang="ts">
import type { LayoutCard } from "@/types";

import CardPanel from "../CardPanel.vue";

const props = defineProps<{
  card: LayoutCard;
}>();

let instanceId = "";
let daemonId = "";

if (props.card.meta) {
  instanceId = props.card.meta.instanceId;
  daemonId = props.card.meta.daemonId;
}
</script>

<template>
  <div style="height: 100%">
    <CardPanel style="height: 100%">
      <template #title>{{ card.title }}</template>
      <template #body>
        <p>参数值：{{ instanceId }}, {{ daemonId }}</p>
        <p>
          接下来可以使用这些参数去获取对应的数据，比如「实例」的状态信息，这样便可以实现在首页显示某个指定实例数据的效果。
        </p>
        <p>但是在 NewCardList 组件中还需要定制化一下</p>
      </template>
    </CardPanel>
  </div>
</template>
