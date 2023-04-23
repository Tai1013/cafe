<template lang="pug">
Popover(class="relative")
  PopoverButton
    span(v-if="orderList.length > 0" class="flex absolute top-0 right-0 w-2.5 h-2.5")
      span(class="absolute rounded-full w-full h-full bg-red-300 animate-ping")
      span(class="relative rounded-full w-full h-full bg-red-500")
    ShoppingBagIcon(class="w-6 h-6")
  transition(
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-1 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-1 opacity-0"
  )
    PopoverPanel(class="absolute right-0")
      div(class="p-2 bg-white rounded-md")
        ul
          li(v-for="list in orderList" :key="list")
//- button(class="relative w-6 h-6" @click="openPopover()")
//-   span(v-if="orderList.length > 0" class="flex absolute top-0 right-0 w-2.5 h-2.5")
//-     span(class="absolute rounded-full w-full h-full bg-red-300 animate-ping")
//-     span(class="relative rounded-full w-full h-full bg-red-500")
//-   ShoppingBagIcon(class="w-6 h-6")

</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'

const orderList = reactive([])
</script>

<style scoped lang="scss">
</style>
