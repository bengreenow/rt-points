<script setup lang="ts">
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
} from "radix-vue";
import { Icon } from "@iconify/vue";
const model = defineModel<number>({ required: true });
const props = defineProps<{ label: string; name: string }>();
</script>

<template>
  <div class="flex flex-nowrap">
    <NumberFieldRoot
      v-model="model"
      class="text-sm text-black"
      :min="0"
      :default-value="18"
    >
      <label :for="name" v-if="label" class="text-black font-bold">{{
        label
      }}</label>
      <div
        class="mt-1 flex items-center border bg-blackA7 border-blackA9 rounded-md"
      >
        <NumberFieldDecrement class="p-2 disabled:opacity-20">
          <Icon icon="radix-icons:minus" />
        </NumberFieldDecrement>
        <NumberFieldInput
          class="bg-transparent w-20 tabular-nums focus:outline-0 p-1"
        />
        <NumberFieldIncrement class="p-2 disabled:opacity-20">
          <Icon icon="radix-icons:plus" />
        </NumberFieldIncrement>
      </div>
    </NumberFieldRoot>
  </div>
</template>
