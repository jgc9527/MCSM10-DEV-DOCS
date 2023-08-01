<script setup lang="ts"></script>

<template>
  <div style="display: flex">
    <div style="display: flex; flex-grow: 1; flex-direction: column; margin-right: 25px">
      <v-card style="margin-bottom: 25px; flex-grow: 1">
        <template v-slot:title> 固定内容 </template>

        <template v-slot:text> 测试消息 </template>
      </v-card>
      <v-card style="flex-grow: 1">
        <template v-slot:title> 固定内容2 </template>

        <template v-slot:text> 测试消息 </template>
      </v-card>
    </div>

    <v-card style="flex-grow: 1">
      <template v-slot:title> 固定内容2 </template>

      <template v-slot:text> 测试消息 </template>
    </v-card>
  </div>
</template>
