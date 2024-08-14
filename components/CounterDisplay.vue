<template>
  <div class="flex flex-col items-center justify-center">
    <img :src="image" v-if="image" alt="Counter Logo" />
    <h2 v-if="title">{{ title }}</h2>
    <SingleCounter :model-value="number" />
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
