<template>
  <div class="flex flex-col items-center justify-center h-dvh">
    <img :src="image" v-if="image" alt="Counter Logo" />
    <h2 v-if="title">{{ title }}</h2>
    <SingleCounter
      class="text-9xl font-bold text-white blackletter"
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

<style>
@import url("https://use.typekit.net/glm2kjr.css");

.blackletter {
  font-family: "schwarzkopf-new", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
