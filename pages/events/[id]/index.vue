<template>
  <div v-if="scores" class="flex">
    <CounterDisplay :number="scores[0]" class="w-1/3" image="/Eden.svg" />
    <CounterDisplay :number="scores[1]" class="w-1/3" image="/Zion.svg" />
    <CounterDisplay :number="scores[2]" class="w-1/3" image="/Judah.svg" />
  </div>
</template>

<script setup lang="ts">
import type { InternalApi } from "nitropack";

const route = useRoute();

const { data, error } = await useFetch(
  `/api/event/${route.params.id}` as "/api/event/:id",
  { method: "GET" }
);

const wsScores = ref<number[] | null>(null);

const { socket } = useRoom(route.params.id as string);

const scores = computed(() => {
  if (wsScores.value) return wsScores.value;
  return data.value?.score;
});

socket.on("scoreUpdated", ({ newScores, eventId, deltas }) => {
  wsScores.value = newScores;
  console.log("score updated", newScores, eventId, deltas);
});
</script>

<style>
html {
  background-color: #333;
  overflow: hidden;
}
</style>
