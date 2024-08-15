<template>
  <div class="flex flex-col items-center justify-center h-dvh">
    <img :src="image" v-if="image" alt="Counter Logo" />
    <h2 v-if="title">{{ title }}</h2>
    <SingleCounter
      class="text-6xl font-bold text-white"
      :model-value="number"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  image?: string;
  number: number;
}>();
</script>

<style lang="scss" scoped></style>
