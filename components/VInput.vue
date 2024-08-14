<template>
  <div class="flex flex-wrap items-center gap-[15px] px-5">
    <Label
      class="text-[15px] font-semibold leading-[35px] text-back"
      :for="name"
    >
      {{ props.label }}
    </Label>
    <input
      v-model="model"
      :name="name"
      v-bind="$attrs"
      class="bg-slate-100 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-slate-700 outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:shadow-md"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
import { Label } from "radix-vue";

const model = defineModel<string>({ required: true });
const props = defineProps<{ label: string; name: string }>();
</script>
