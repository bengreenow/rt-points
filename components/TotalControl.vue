<template>
  <div class="border rounded flex-col items-center flex p-2">
    <h1 class="text-xl mb-2 font-bold">{{ title }}</h1>
    <div class="flex place-content-center items-center">
      <div class="text-sm mb-2 px-5 flex flex-col text-left">
        <span>Current Score:</span>
        <span>{{ currentValue > 0 ? "+" : "" }}{{ currentValue }}</span>
      </div>
      <div class="text-xl mb-2 text-center">
        {{ runningTotal > 0 ? "+" : "" }}{{ runningTotal }}
      </div>
      <div class="text-sm mb-2 px-5 flex flex-col text-left">
        <span>New Score:</span>
        <span
          >{{ currentValue + runningTotal > 0 ? "+" : ""
          }}{{ currentValue + runningTotal }}</span
        >
      </div>
    </div>
    <div class="flex flex-col gap-2 justify-center">
      <div class="flex flex-col gap-2 items-center">
        <div class="flex">
          <VButton label="-1000" @click="runningTotal -= 1000" />
          <VButton label="+1000" @click="runningTotal += 1000" />
        </div>
        <div class="flex">
          <VButton label="-100" @click="runningTotal -= 100" />
          <VButton label="+100" @click="runningTotal += 100" />
        </div>
        <div class="flex">
          <VButton label="-50" @click="runningTotal -= 50" />
          <VButton label="+50" @click="runningTotal += 50" />
        </div>
        <div class="flex">
          <VButton label="-10" @click="runningTotal -= 10" />
          <VButton label="+10" @click="runningTotal += 10" />
        </div>
        <div class="flex">
          <VButton label="-1" @click="runningTotal -= 1" />
          <VButton label="+1" @click="runningTotal += 1" />
        </div>
      </div>
      <div class="flex no-wrap gap-2">
        <VButton :label="`-${custom}`" @click="runningTotal -= custom" />
        <VNumber v-model.number="custom" type="number" label="" name="custom" />
        <VButton :label="`+${custom}`" @click="runningTotal += custom" />
      </div>
      <VButton label="Reset Running Total" @click="runningTotal = 0" />
    </div>
  </div>
</template>

<script setup lang="ts">
const runningTotal = defineModel<number>({ required: true });

const props = defineProps<{ currentValue: number; title: string }>();

const custom = ref(100);
</script>

<style lang="scss" scoped></style>
