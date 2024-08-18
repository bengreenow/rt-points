<template>
  <div class="flex flex-col mb-20 pb">
    <h2 class="text-xl">Admin: {{ data?.name }}</h2>
    <div class="flex flex-col md:flex-row flex-nowrap gap-2">
      <TotalControl
        class="md:w-1/3"
        title="House Eden"
        :model-value="runningTotals.at(0) || 0"
        :currentValue="data?.score.at(0) || 0"
        @update:model-value="updateTotal(0, $event)"
      />
      <TotalControl
        title="House Zion"
        class="md:w-1/3"
        :model-value="runningTotals.at(1) || 0"
        :currentValue="data?.score.at(1) || 0"
        @update:model-value="updateTotal(1, $event)"
      />
      <TotalControl
        title="House Judah"
        class="md:w-1/3"
        :model-value="runningTotals.at(2) || 0"
        :currentValue="data?.score.at(2) || 0"
        @update:model-value="updateTotal(2, $event)"
      />
    </div>
    <div
      class="fixed container flex place-content-center bottom-0 shadow-lg backdrop-blur-sm backdrop-brightness-50 rounded border p-2"
    >
      <VButton
        class="bg-green-600 hover:bg-green-400"
        label="Update Scores"
        @click="updateScores()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const runningTotal = ref(0);

const route = useRoute();

const { data, error, refresh } = await useFetch(
  `/api/event/${route.params.id}` as "/api/event/:id",
  { method: "GET" }
);

const runningTotals = ref(new Array(data.value?.score.length || 3).fill(0));
const updateTotal = (index: number, value: number) => {
  runningTotals.value[index] = value;
};

const { socket } = useRoom(route.params.id as string);

const updateScores = async () => {
  await socket.emitWithAck(
    "updateScores",
    runningTotals.value,
    route.params.id
  );
  refresh();
  runningTotals.value = new Array(data.value?.score.length || 3).fill(0);
};
</script>

<style lang="scss" scoped></style>
