<template>
  <h1 class="text-3xl mb-4 font-bold">All Events</h1>
  <div class="flex" v-if="data">
    <div
      v-for="d in data"
      class="bg-slate-500 flex-col flex rounded text-white"
    >
      <div class="p-4">
        <h2 class="text-2xl font-bold">{{ d.name }}</h2>
        <div class="flex">
          Scores:
          <div class="text-slate-300 italic pl-2" v-if="d.score.length === 0">
            No scores yet
          </div>
          <div v-for="s in d.score">
            {{ s }}
          </div>
        </div>
      </div>

      <hr />
      <div class="flex gap-2 px-4 py-2">
        <RouterLink :to="`/events/${d.id}`" :is="'div'">
          <VButton label="Display"></VButton>
        </RouterLink>
        <RouterLink :to="`/events/${d.id}/admin`" :is="'div'">
          <VButton label="Admin"></VButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = useFetch("/api/event/list");
</script>

<style lang="scss" scoped></style>
