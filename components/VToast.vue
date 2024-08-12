<script setup lang="ts">
import {
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "radix-vue";

const { _message: message, _title: title, open } = useToast();
</script>

<template>
  <ToastProvider>
    <ToastRoot
      v-model:open="open"
      class="bg-green-500 rounded-md p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
    >
      <ToastTitle
        class="[grid-area:_title] mb-[5px] text-white text-[15px] font-bold"
      >
        <div>{{ title }}</div>
      </ToastTitle>
      <ToastDescription as-child class="text-white">
        <div>{{ message }}</div>
      </ToastDescription>
    </ToastRoot>
    <ToastViewport
      class="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none"
    />
  </ToastProvider>
</template>
